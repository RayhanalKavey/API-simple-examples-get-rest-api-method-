//SectioN load All the phone
const loadPhone = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data, dataLimit);
};
loadPhone("apple");
///SectioN Display phone to the UI
const displayPhone = (phones, dataLimit) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  //ParT Display 6 Phones only
  const showAllBtn = document.getElementById("show-all");
  if (dataLimit && phones.length > 6) {
    phones = phones.slice(0, 6);
    showAllBtn.classList.remove("d-none");
  } else {
    showAllBtn.classList.add("d-none");
  }
  //ParT No phone display
  const noResult = document.getElementById("no-phone-text");
  if (phones.length === 0) {
    noResult.classList.remove("d-none");
  } else {
    noResult.classList.add("d-none");
  }
  //ParT Phone display
  phones.forEach((phone) => {
    const { brand, phone_name, slug, image } = phone;
    // console.log(slug);
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
                    <button href="#" onclick="loadShowDetails('${slug}')" class="btn btn-primary">Show details</button>

              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  // stop spinner
  toggleSpinner(false);
  //------
};
//SectioN process search
const processSearch = (dataLimit) => {
  // start spinner
  toggleSpinner(true);
  //------
  const searchField = document.getElementById("search-feild");
  const searchFieldValue = searchField.value;
  loadPhone(searchFieldValue, dataLimit);
};

///SectioN Search btn click then load All the phone
document.getElementById("btn-search").addEventListener("click", function () {
  processSearch(6);
});

///SectioN toggle spinner
const toggleSpinner = (isLoading) => {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

//SectioN Add click to show-all btn. (this is the third best way to add show all phones, because of the limitations of the API link.)
document.getElementById("btn-show-all").addEventListener("click", function () {
  processSearch();
});
//SectioN Show details button

const loadShowDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowDetails(data.data));
};
const displayShowDetails = (phone) => {
  const { brand, image, mainFeatures, name, releaseDate } = phone;
  const { chipSet, displaySize, storage, sensors } = mainFeatures;
};
