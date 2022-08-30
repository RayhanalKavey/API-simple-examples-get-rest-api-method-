const loadPhone = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};
const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  phones.forEach((phone) => {
    const { brand, phone_name, slug, image } = phone;
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
      <div class="card p-4">
              <img src="${image}" class="card-img-top p-2" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${phone_name}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  console.log(phones);
};
///Search btn click
document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-feild");
  const searchFieldValue = searchField.value;
  loadPhone(searchFieldValue);
});
