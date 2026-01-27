const API_URL = "/api/users";

// Get all users
document.getElementById("getUsersBtn").addEventListener("click", async () => {
  const res = await fetch(API_URL);
  const users = await res.json();

  const usersList = document.getElementById("usersList");
  usersList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${user.id} | Name: ${user.name} | Email: ${user.email}`;
    usersList.appendChild(li);
  });
});

// Create a user
document.getElementById("createUserBtn").addEventListener("click", async () => {
  const name = document.getElementById("createName").value;
  const email = document.getElementById("createEmail").value;
  const password = document.getElementById("createPassword").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  alert("User created");
  console.log(data);
});

// Update the user
document.getElementById("updateUserBtn").addEventListener("click", async () => {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const email = document.getElementById("updateEmail").value;
  const password = document.getElementById("updatePassword").value;

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  alert("User updated");
  console.log(data);
});

// Delete the user
document.getElementById("deleteUserBtn").addEventListener("click", async () => {
  const id = document.getElementById("deleteId").value;

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  alert("User deleted");
});
