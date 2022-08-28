const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};
const displayUsers = (users) => {
  const userContainer = document.getElementById("users-container");
  // for (const user of users) {
  //   console.log(user);
  // }
  // // or for each
  users.forEach((user) => {
    const { email, location, name } = user;
    const { city } = location;
    const { title, first, last } = name;
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
    <h3>${title} ${first} ${last}</h3>
    <p> Email: ${email} </p>
    <p>User location: ${city}</p>
    
    `;
    userContainer.appendChild(userDiv);
  });
};

loadUsers();
