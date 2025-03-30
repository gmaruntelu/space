// Cannot set properties of null (setting 'innerText')
// Cannot read properties of null (reading 'innerText')

const destinationImagesElement = document.querySelector(".destination-images");
const destinationNameElement = document.querySelector(".destionation-name");
const destinationDescriptionElement = document.querySelector( ".destination-description");
const destinationDistanceElement = document.querySelector(".destination-distance");
const destinationTravelElement = document.querySelector(".destination-travel");

const moonButton = document.querySelector(".moon-button");
const marsButton = document.querySelector(".mars-button");
const europeButton = document.querySelector(".europe-button");
const titanButton = document.querySelector(".titan-button");

let destinations;


const getDestinations = async () => {
  const response = await fetch("destinations.json");
  const data = await response.json();
  destinations = data.destinations;  

};


getDestinations();


const displayMoonData = () => {
  destinationImagesElement.setAttribute("src",destinations[0].images.png);
  destinationNameElement.innerText = destinations[0].name;
  destinationDescriptionElement.innerText = destinations[0].description;
  destinationDistanceElement.innerText = destinations[0].distance;
  destinationTravelElement.innerText = destinations[0].travel;
  };

const displayMarsData = () => {
  destinationImagesElement.setAttribute("src",destinations[1].images.png);
  destinationNameElement.innerText = destinations[1].name;
  destinationDescriptionElement.innerText = destinations[1].description;
  destinationDistanceElement.innerText = destinations[1].distance;
  destinationTravelElement.innerText = destinations[1].travel;
};

const displayEuropeData = () => {
  destinationImagesElement.setAttribute("src",destinations[2].images.png);
  destinationNameElement.innerText = destinations[2].name;
  destinationDescriptionElement.innerText = destinations[2].description;
  destinationDistanceElement.innerText = destinations[2].distance;
  destinationTravelElement.innerText = destinations[2].travel;
};

const displayTitanData = () => {
  destinationImagesElement.setAttribute("src",destinations[3].images.png);
  destinationNameElement.innerText = destinations[3].name;
  destinationDescriptionElement.innerText = destinations[3].description;
  destinationDistanceElement.innerText = destinations[3].distance;
  destinationTravelElement.innerText = destinations[3].travel;
};

moonButton.addEventListener("click", displayMoonData);
marsButton.addEventListener("click", displayMarsData);
europeButton.addEventListener("click", displayEuropeData);
titanButton.addEventListener("click", displayTitanData);

// Intotdeauna cand vrei sa se intample ceva cand dai click pe un buton:
// 1) selectezi elementul ( ex linia  8 )
// 2) setezi event listener ( ex linia 30 )
// 3) creezi functia care sa se execute pe click ( ex linia 25 )

