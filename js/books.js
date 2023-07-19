
$("#ah1").text("This worked");
import fetch from "node-fetch";

import dotenv from 'dotenv'; 
dotenv.config( );


// Function to make the API request
function searchBooks(query) {
    const apiKey = 'AIzaSyDcSg0qUvl2dcjUA9wEKb-A158C-agZjqQ'; // Replace with your own Google Books API key
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.BOOKS_API_KEY}`;
    
  
    // Send the API request
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process the response data
        console.log(data.items[0]); // Example: Log the response data to the console
        // $("#ah1").text(String(data.items[0]));

      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }
  
  // Usage
  const searchTerm = 'Harry Potter and the philsophers stone'; // Replace with your desired search term
  searchBooks(searchTerm);
  