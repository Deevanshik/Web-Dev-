const output = document.querySelector("#output");
const getUsersButton = document.querySelector("#get-users-btn");
const addUserForm = document.querySelector("#get-users-form");

// Get and show users
const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/users");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await res.json();
    output.innerHTML = "";

    users.forEach((user) => {
      const userEl = document.createElement("div");
      userEl.textContent = user.name;
      output.appendChild(userEl);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// Add a new user
async function addUser(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const username = formData.get("name");

  try {
    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(), // simple unique id
        name: username,
      }),
    });

    if (!res.ok) {
      throw new Error("Cannot add user");
    }

    getUsers();

    this.reset();
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

getUsersButton.addEventListener("click", getUsers);
addUserForm.addEventListener("submit", addUser);
