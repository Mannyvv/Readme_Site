$(document).ready(function () {

  // Search Book Title
  let searchBtn = document.getElementById("searchButton");
  let searchTermEl = document.getElementById("searchInput");
  
  // Event Listeners for search => enter key or mouse click
  searchBtn.addEventListener("click", () =>{
    let searchTerm = searchTermEl.value;
    fetchData(searchTerm);
  });


  searchTermEl.addEventListener("keydown", (key) =>{
    if (key.code === "Enter"){
      let searchTerm = searchTermEl.value;
      fetchData(searchTerm);
    }});

  // Fetch data from Google Books API
  function fetchData(query) {
    console.log(query);

    axios
      .get(`http://localhost:3001/search?q=${query}`)
      .then((response) => {
        searchTermEl.value = "";
        const data = response.data; // Access the entire response data
        const books = data.items; // Access the 'items' array from the response
        
       

        const container = document.getElementById('card-container');
        container.innerHTML = "";

        if (books && books.length > 0) {
          // Loop through the array to access individual book data
          books.forEach((book) => {
            const bookInfo = book.volumeInfo; // Access the book information from 'volumeInfo'
             // Shorten Book Title
            let title = bookInfo.title;
            if (bookInfo.title.length > 60){
              title = `${bookInfo.title.slice(0,60)}...`;
            }
            const authors = bookInfo.authors;
            // Check for average rating : True -> Rating and Start, False -> N/A
            const averageRating = bookInfo.averageRating ? `${bookInfo.averageRating}<i class="fa fa-star"></i>` : "N/A";
            // Change en to English string
            if(bookInfo.language === "en"){
              var languages = "English"
            }
            // Shorten Description: Wanted to add "More" button to reveal rest of description
            const description_1 = bookInfo.description.slice(0,100);
            const description_2 = bookInfo.description.slice(101,200);
            // Check for thumbnail image : True -> Using Image, False -> Use "image not available png"
            const thumbnailUrl = bookInfo.imageLinks ? bookInfo.imageLinks.smallThumbnail : "/img/noImg.jpg";
            createCard(title,description_1,description_2,authors,thumbnailUrl,languages,averageRating) ;
          });
        } else {
          console.log("No books found for the given search term.");
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });

     
  }

// Function to dynamically create cards for each book in api response
function createCard(booktitle,description_1,description_2,author,imageURL,languages,averageRating) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="col-md-6 col-lg-4" id="cardcontainer">
  <div class="card" style="width: 15rem;" id="cardonly">
    <img class="card-img-top " src="${imageURL}" alt="No Image Found" style="max-width:100%;height:auto;">
    <div class="card-body">
      <h5 class="card-title"><a href= "https://www.google.com/search?q=${booktitle}" style= "color:black;">${booktitle}<a></h5>
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
