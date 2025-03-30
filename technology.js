
const technologyNameElement = document.querySelector(".technology-name");
const technologyDescriptionElement = document.querySelector(".technology-description");
const technologyImagesElement = document.querySelector(".technology-images");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");


let technology;


const getTechnology = async () => {
  const response = await fetch("technology.json");
  const data = await response.json();
  technology = data.technology;  
    
};


getTechnology();


const displayLaunchVehicleData = () => {
    technologyNameElement.innerText = technology[0].name;
    technologyDescriptionElement.innerText = technology[0].description;
    technologyImagesElement.setAttribute("src",technology[0].images.portrait);
};

const displaySpaceportData = () => {
    technologyNameElement.innerText = technology[1].name;
    technologyDescriptionElement.innerText = technology[1].description;
    technologyImagesElement.setAttribute("src",technology[1].images.portrait);
};

const displaySpaceCapsuleData = () => {
    technologyNameElement.innerText = technology[2].name;
    technologyDescriptionElement.innerText = technology[2].description;
    technologyImagesElement.setAttribute("src",technology[2].images.portrait);
};




button1.addEventListener("click", displayLaunchVehicleData);
button2.addEventListener("click", displaySpaceportData);
button3.addEventListener("click", displaySpaceCapsuleData);
