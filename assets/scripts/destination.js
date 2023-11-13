// Selectors
const destImageDiv = document.querySelector(".destination-container__left--image");
const moonBtn = document.getElementById("moon-btn");
const marsBtn = document.getElementById("mars-btn");
const europaBtn = document.getElementById("europa-btn");
const titanBtn = document.getElementById("titan-btn");

// Variables
let moonActive = true;
let marsActive = false;
let europaActive = false;
let titanActive = false;

// Event listeners
moonBtn.addEventListener("click", () => {
  moonActive = true;
  marsActive = false;
  europaActive = false;
  titanActive = false;
  moonBtn.classList.add('btn-active');
  marsBtn.classList.remove('btn-active');
  europaBtn.classList.remove('btn-active');
  titanBtn.classList.remove('btn-active');
  destinationData();
});

marsBtn.addEventListener("click", () => {
  moonActive = false;
  marsActive = true;
  europaActive = false;
  titanActive = false;
  moonBtn.classList.remove('btn-active');
  marsBtn.classList.add('btn-active');
  europaBtn.classList.remove('btn-active');
  titanBtn.classList.remove('btn-active');
  destinationData();
});

europaBtn.addEventListener("click", () => {
  moonActive = false;
  marsActive = false;
  europaActive = true;
  titanActive = false;
  moonBtn.classList.remove('btn-active');
  marsBtn.classList.remove('btn-active');
  europaBtn.classList.add('btn-active');
  titanBtn.classList.remove('btn-active');
  destinationData();
});

titanBtn.addEventListener("click", () => {
  moonActive = false;
  marsActive = false;
  europaActive = false;
  titanActive = true;
  moonBtn.classList.remove('btn-active');
  marsBtn.classList.remove('btn-active');
  europaBtn.classList.remove('btn-active');
  titanBtn.classList.add('btn-active');
  destinationData();
});

// Get json data
const destinationData = async () => {
  try {
    const response = await fetch('../data.json');
    const data = await response.json();
    const moonData = data.destinations.find(destination => destination.name === "Moon");
    const marsData = data.destinations.find(destination => destination.name === "Mars");
    const europaData = data.destinations.find(destination => destination.name === "Europa");
    const titanData = data.destinations.find(destination => destination.name === "Titan");

    // Clear existing images
    destImageDiv.textContent = "";

    // Handle data based on active flags
    if (moonActive) {
      handleMoonData(moonData);
    } else if (marsActive) {
      handleMarsData(marsData);
    } else if (europaActive) {
      handleEuropaData(europaData);
    } else if (titanActive) {
      handleTitanData(titanData);
    }
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

// Handle data functions
const handleMoonData = (data) => {
  if (data) {
    createImage(data);
  } else {
    console.error("Moon data not available");
  }
};

const handleMarsData = (data) => {
  if (data) {
    createImage(data);
  } else {
    console.error("Mars data not available");
  }
};

const handleEuropaData = (data) => {
  if (data) {
    createImage(data);
  } else {
    console.error("Europa data not available");
  }
};

const handleTitanData = (data) => {
  if (data) {
    createImage(data);
  } else {
    console.error("Titan data not available");
  }
};

// Create destination image
const createImage = (data) => {
  const destImage = document.createElement("img");
  destImage.setAttribute("src", `${data.images.webp}`);
  destImage.classList.add("dest-image");
  destImageDiv.appendChild(destImage);
};

// Initial data load
destinationData();
