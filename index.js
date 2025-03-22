// Remove the <main> element with id 'main'
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new <h1> to 'victory'
newHeader.id = "victory";

// Set the inner text of <h1> to include your name
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the newHeader to the document body
document.body.appendChild(newHeader);
