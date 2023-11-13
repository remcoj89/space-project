// Selectors
const mainDestination = document.getElementById('main-destination');
const destHeader1 = document.getElementById("destination-heading-1");
const destNavTitle = document.querySelector(".destination-container__left--title");
const destImageDiv = document.querySelector(".destination-container__left--image");
const moonBtn = document.getElementById("moon-btn");
const marsBtn = document.getElementById("mars-btn");
const europaBtn = document.getElementById("europa-btn");
const titanBtn = document.getElementById("titan-btn");

// variables
let moonActive = true;
let marsActive = false;
let europaActive = false;
let titanActive = false;

// event listeners

moonBtn.addEventListener("click", () => {
  moonActive = true;
  marsActive = false;
  europaActive = false;
  titanActive = false;
  console.log("moon button")
})

marsBtn.addEventListener("click", () => {
  moonActive = false;
  marsActive = true;
  europaActive = false;
  titanActive = false;
  console.log("mars button")
})


// moondata
const handleMoonData = (data) => {
  if(moonActive) {
    createImage(data);
  }
}

// marsdata
const handleMarsData = (data) => {
  if(marsActive) {
    createImage(data);
  }
}

// europa data
const handleEuropaData = (data) => {
  if(europaActive) {
    createImage(data);
  }
}

// titan data
const handleTitanData = (data) => {
  if(titanActive) {
    createImage(data);
  }
}


// creating destination image
const createImage = (data) => {
  const destImage = document.createElement("img");
  destImage.setAttribute("src", `${data.images.webp}`);
  destImage.classList.add("dest-image");
  destImageDiv.appendChild(destImage);
}

// Get json data
const destinationData = async () => {
  try {
    const response = await fetch('../data.json');
    const data = await response.json();
    const moonData = data.destinations.find(destination => destination.name === "Moon");
    const marsData = data.destinations.find(destination => destination.name === "Mars");
    const europaData = data.destinations.find(destination => destination.name === "Europa");
    const titanData = data.destinations.find(destination => destination.name === "Titan");
    handleMoonData(moonData);
    handleMarsData(marsData);
    handleEuropaData(europaData);
    handleTitanData(titanData);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}


destinationData();
