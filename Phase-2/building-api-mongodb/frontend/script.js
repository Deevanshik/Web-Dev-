const BASE_URL = "http://localhost:8080/api/users";
const output = document.getElementById("output");

/* ---------- helpers ---------- */
function clearInputs(...inputs) {
  inputs.forEach(input => input.value = "");
}

function renderUsers(users) {
  output.innerHTML = "";

  if (!users.length) {
    output.innerHTML = "<p>No users found</p>";
    return;
  }

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
      <strong>Username:</strong> ${user.username}
      <br />
      <strong>Hobbies:</strong>
      <ul>
        ${user.hobbies.map(hobby => `<li>${hobby}</li>`).join("")}
      </ul>
    `;

    output.appendChild(card);
  });
}

/* ---------- CREATE ---------- */
async function createUser() {
  const u = document.getElementById("c-username");
  const p = document.getElementById("c-password");
  const h = document.getElementById("c-hobbies");

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: u.value,
      password: p.value,
      hobbies: h.value.split(",").map(x => x.trim()).filter(Boolean)
    })
  });

  output.textContent = await res.text();

  if (res.ok) clearInputs(u, p, h);
}

/* ---------- UPDATE ---------- */
async function updateUser() {
  const u = document.getElementById("u-username");
  const p = document.getElementById("u-password");
  const h = document.getElementById("u-hobbies");

  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: u.value,
      password: p.value,
      hobbies: h.value.split(",").map(x => x.trim()).filter(Boolean)
    })
  });

  output.textContent = await res.text();

  if (res.ok) clearInputs(u, p, h);
}

/* ---------- DELETE ---------- */
async function deleteUser() {
  const u = document.getElementById("d-username");
  const p = document.getElementById("d-password");

  const res = await fetch(BASE_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: u.value, password: p.value })
  });

  output.textContent = await res.text();

  if (res.ok) clearInputs(u, p);
}

/* ---------- GET ALL ---------- */
async function getUsers() {
  const res = await fetch(BASE_URL);
  const users = await res.json();
  renderUsers(users);
}
