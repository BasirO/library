"use strict";
// script.js
const library = [];
document.getElementById("bookform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
  
    // Get the form field values
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("read");
  
    // Create an array to store the data
    
     let isChecked = status.checked;

        library.push({ title: title, author: author, pages: pages, status:isChecked });
    
    // Add the form data to the array
    
  
    // Perform any desired operations with the dataArray
    console.log(library);
    displayLibrary();
});
// JavaScript code

function removeBook(index) {
    library.splice(index, 1);
  }
  
  function toggleStatus(index) {
    library[index].status = !library[index].status;
    var table = document.getElementById("libraryTable");
    var row = table.rows[index + 1];
    var statusCell = row.cells[3];
    statusCell.textContent = library[index].status ? "Read" : "Not Read";
  }
  
  function displayLibrary() {
    var table = document.getElementById("libraryTable");
    var tbody = table.querySelector("tbody");
  
    tbody.innerHTML = ""; // Clear existing table rows
  
    for (var i = 0; i < library.length; i++) {
      var row = document.createElement("tr");
  
      var titleCell = document.createElement("td");
      titleCell.textContent = library[i].title;
      row.appendChild(titleCell);
  
      var authorCell = document.createElement("td");
      authorCell.textContent = library[i].author;
      row.appendChild(authorCell);
  
      var pagesCell = document.createElement("td");
      pagesCell.textContent = library[i].pages;
      row.appendChild(pagesCell);
  
      var statusCell = document.createElement("td");
      statusCell.textContent = library[i].status ? "Read" : "Not Read";
      row.appendChild(statusCell);
  
      var removeButtonCell = document.createElement("td");
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.dataset.index = i;
      removeButton.style.backgroundColor = "#f44336";
      removeButton.style.color = "white";
      removeButton.style.border = "none";
      removeButton.style.padding = "5px 10px";
      removeButton.style.cursor = "pointer";
      removeButton.style.borderRadius = "5px";
      removeButton.addEventListener("click", function() {
        var index = parseInt(this.dataset.index);
        removeBook(index);
        displayLibrary();
      });
      removeButtonCell.appendChild(removeButton);
      row.appendChild(removeButtonCell);
  
      var toggleButtonCell = document.createElement("td");
      var toggleButton = document.createElement("button");
      toggleButton.textContent = "Status";
      toggleButton.dataset.index = i;
      toggleButton.style.backgroundColor = "lightgreen";
      toggleButton.style.color = "white";
      toggleButton.style.border = "none";
      toggleButton.style.padding = "5px 10px";
      toggleButton.style.cursor = "pointer";
      toggleButton.style.borderRadius = "5px";
      toggleButton.addEventListener("click", function() {
        var index = parseInt(this.dataset.index);
        toggleStatus(index);
      });
      toggleButtonCell.appendChild(toggleButton);
      row.appendChild(toggleButtonCell);
  
      tbody.appendChild(row);
    }
  }
  
  // Call the displayLibrary function to populate the table
 
class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }

  document.body.style.backgroundColor = "#f2f2f2";