const loadPhone = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};
const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  //Display 5 Phones only
  //No phone display
  const noResult = document.getElementById("no-phone-text");
  if (phones.length === 0) {
    phones = phones.slice(0, 6);
    noResult.classList.remove("d-none");
  } else {
    noResult.classList.add("d-none");
  }
  //Phone display
  phones.forEach((phone) => {
    // noResult.classList.add("d-none");
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
  // stop spinner
  toggleSpinner(false);
  //------
};
///Search btn click
document.getElementById("btn-search").addEventListener("click", function () {
  // start spinner
  toggleSpinner(true);
  //------
  const searchField = document.getElementById("search-feild");
  const searchFieldValue = searchField.value;
  loadPhone(searchFieldValue);
});
///toggle spinner
const toggleSpinner = (isLoading) => {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};
