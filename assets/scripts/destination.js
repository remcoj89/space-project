// Selectors
const mainDestination = document.getElementById('main-destination');
const destHeader1 = document.getElementById("destination-heading-1");
const destNavTitle = document.querySelector(".destination-container__left--title")
const destImageDiv = document.querySelector(".destination-container__left--image")



const handleMoonData = (data) => {
  createImage(data);
}
const handleMarsData = (data) => {
  createImage(data);
}
const handleEuropaData = (data) => {
  createImage(data);
}
const handleTitanData = (data) => {
  createImage(data);
}

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
