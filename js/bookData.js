$(document).ready(function () {
  let searchBtn = document.getElementById("searchButton");
  let searchTermEl = document.getElementById("searchInput");
  searchBtn.addEventListener("click", fetchData);
  searchTermEl.addEventListener("keydown", function(key){
    if (key.code === "Enter"){
      fetchData();
    }});

  function fetchData() {
    let searchTerm = searchTermEl.value;
    console.log(searchTerm);

    axios
      .get(`http://localhost:3001/search?q=${searchTerm}`)
      .then((response) => {
        searchTermEl.value = ""
        const data = response.data; // Access the entire response data
        const books = data.items; // Access the 'items' array from the response
        
       

        const container = document.getElementById('card-container');
        container.innerHTML = "";

        if (books && books.length > 0) {
          // Loop through the array to access individual book data
          books.forEach((book) => {
            const bookInfo = book.volumeInfo; // Access the book information from 'volumeInfo'
            let title = bookInfo.title
            if (bookInfo.title.length > 60){
              title = `${bookInfo.title.slice(0,60)}...`;
            }
            const authors = bookInfo.authors;
            var averageRating = "N/A";
            if(bookInfo.averageRating){
            var averageRating = `${bookInfo.averageRating}<i class="fa fa-star"></i>`
            }

            if(bookInfo.language === "en"){
              var languages = "English"
            }
            const description_1 = bookInfo.description.slice(0,100);
            const description_2 = bookInfo.description.slice(101,200);
            const pageCount = bookInfo.pageCount;
            const thumbnailUrl = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "/img/noImg.jpg";
            // Add more properties as needed based on your use case
            createCard(title,description_1,description_2,authors,thumbnailUrl,languages,averageRating) ;



            // console.log("Title:", title);
            // console.log("Authors:", authors);
            // console.log("Description:", description);
            // console.log("Page Count:", pageCount);
            // console.log("Image Thumbnail:", thumbnailUrl)
            // console.log("----------------------------------------------");
          });
        } else {
          console.log("No books found for the given search term.");
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
      // code from starter
      document.addEventListener('click', test)
      
      function test(){
      let readMoreBtns = document.getElementsByClassName('moreBtnClass')
      // Convert HTML collection to array
      Array.from(readMoreBtns).forEach( btn1 => {
      btn1.addEventListener('click', btn => {
        console.log(btn1.parentElement.childNodes)


            })});
          }
        // code from starter
  }

  // Card creation
let cardCount = 0;

function addCard() {
  cardCount++;
  const cardContainer = document.getElementById('card-container');
  const card = createCard(cardCount);
  cardContainer.appendChild(card);
}

function createCard(title,description_1,description_2,author,imageURL,languages,averageRating) {
  
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="col-md-6 col-lg-4" id="cardcontainer">
  <div class="card" style="width: 15rem;" id="cardonly">
    <img class="card-img-top " src="${imageURL}" alt="No Image Found" style="max-width:100%;height:auto;">
    <div class="card-body">
      <h5 class="card-title"><a href= "https://www.google.com/search?q=${title}" style= "color:black;">${title}<a></h5>
      <p class="card-subtitle"><b>Average Rating:</b> ${averageRating} </p>
      <p class="card-subtitle"><b>By: </b><a class="text-info" href="https://www.google.com/search?q=${author}">${author}</a></p>
      <p class="card-subtitle"><b>Languages: </b>${languages}</p>
      <hr>
      <p class="card-text description">${description_1}<span id="dots">...</span><span id="more">${description_2}</span></p>
      <button class="moreBtnClass">Read more</button>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" >
        <label class="form-check-label" for="flexSwitchCheckChecked">Personal Library</label>
      </div>
      
    </div>
  </div>
</div>
  `;
  const cardContainer = document.getElementById('card-container');
  
  cardContainer.appendChild(card);
}

});
