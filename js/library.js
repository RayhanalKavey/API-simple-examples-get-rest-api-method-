const loadBook = () => {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => findBook(data.docs));
};
// findBook();
const findBook = (books) => {
  const resultContainer = document.getElementById("search-result");
  resultContainer.innerHTML = "";
  books.forEach((book) => {
    const { title, author_name, publish_date, cover_i, author_key } = book;
    // Create and append card
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("col");
    bookDiv.innerHTML = `
            <div  class="card h-100 shadow-lg">
              <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Book Title: ${title}</h5>
                <p class="card-text">Author Name: ${author_name[0]}
                <p class="card-text">Publish Date: ${publish_date[0]}
                </p>
              </div>
              <div class="card-footer">
  <button class="btn btn-outline btn-outline-success" onclick="loadAuthorDetails('${author_key[0]}')">Author Details</button>
</div>
            </div>
        
    `;

    resultContainer.appendChild(bookDiv);
  });
};
const loadAuthorDetails = (key) => {
  const url = `https://openlibrary.org/authors/${key}.json`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayAuthor(data));
};
const displayAuthor = (author) => {
  const { name, birth_date, key, top_work, bio, work_count, wikipedia } =
    author;
  //Window scroll
  window.scroll(0, 40);
  const authorField = document.getElementById("author-details");
  //Clear field initially
  authorField.innerHTML = "";
  // Create and append card
  const authorDiv = document.createElement("div");
  authorDiv.classList.add("col");
  authorDiv.innerHTML = `
            <div  class="card h-100 card shadow-lg">
              <img src="https://covers.openlibrary.org/a/id/'${key}'-M.jpg" class="card-img-top" alt="" />
              <div class="card-body">
                <p class="card-text">Author Name: ${name}
                <p class="card-text">Date of Birth: ${birth_date}
                <p class="card-text">Bio: ${bio ? bio : "N/A"}
                </p>
                <p class="card-text">Wikipedia: ${wikipedia}
                </p>
              </div>

            </div>
        
    `;

  authorField.appendChild(authorDiv);

  console.log(author);
};
