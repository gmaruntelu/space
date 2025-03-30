const crewRoleElement = document.querySelector(".crew-role");
const crewNameElement = document.querySelector(".crew-name");
const crewBioElement = document.querySelector(".crew-bio");
const crewImagesElement = document.querySelector(".crew-images");

const carouselButton = document.querySelector(".carousel-button");
const carouselButton1 = document.querySelector(".carousel-button1");
const carouselButton2 = document.querySelector(".carousel-button2");
const carouselButton3 = document.querySelector(".carousel-button3");

let crew;


const getCrew = async () => {
  const response = await fetch("crew.json");
  const data = await response.json();
  crew = data.crew;  
    console.group(crew)
};


getCrew();


const displayComanderData = () => {
  crewRoleElement.innerText = crew[0].role;
  crewNameElement.innerText = crew[0].name;
  crewBioElement.innerText = crew[0].bio;
  crewImagesElement.setAttribute("src",crew[0].images.png);
};

const displayMissionSpecialistData = () => {
  crewRoleElement.innerText = crew[1].role;
  crewNameElement.innerText = crew[1].name;
  crewBioElement.innerText = crew[1].bio;
  crewImagesElement.setAttribute("src",crew[1].images.png);
};

const displayPilotData = () => {
  crewRoleElement.innerText = crew[2].role;
  crewNameElement.innerText = crew[2].name;
  crewBioElement.innerText = crew[2].bio;
  crewImagesElement.setAttribute("src",crew[2].images.png);
};

const displayFlightEngineerData = () => {
  crewRoleElement.innerText = crew[3].role;
  crewNameElement.innerText = crew[3].name;
  crewBioElement.innerText = crew[3].bio;
  crewImagesElement.setAttribute("src",crew[3].images.png);
};


carouselButton.addEventListener("click", displayComanderData);
carouselButton1.addEventListener("click", displayMissionSpecialistData);
carouselButton2.addEventListener("click", displayPilotData);
carouselButton3.addEventListener("click", displayFlightEngineerData);
