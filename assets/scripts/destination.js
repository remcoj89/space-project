const destinationButtons = document.querySelectorAll(".destination-btn");
const destImageDiv = document.querySelector(".destination-left--image");
const destContentDiv = document.querySelector(".destination-content");

let activeDestination = "moon";

const setActiveButton = (buttonId) => {
  destinationButtons.forEach((button) => {
    button.classList.toggle('btn-active', button.id === buttonId);
  });
};

const handleDestinationClick = (destination) => {
  activeDestination = destination;
  setActiveButton(`${destination}-btn`);
  destinationData();
};

destinationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleDestinationClick(button.id.replace("-btn", ""));
  });
});

const destinationData = async () => {
  try {
    const response = await fetch('../data.json');
    const data = await response.json();
    const activeData = data.destinations.find(destination => destination.name.toLowerCase() === activeDestination);

    destImageDiv.textContent = "";
    destContentDiv.textContent = "";

    if (activeData) {
      handleDestinationData(activeData);
    } else {
      console.error(`${activeDestination} data not available`);
    }
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

const handleDestinationData = (data) => {
  createImage(data);
  createHeading(data);
  createContent(data);
};

const createImage = (data) => {
  const destImage = document.createElement("img");
  destImage.setAttribute("src", `${data.images.webp}`);
  destImage.classList.add("dest-image");
  destImageDiv.appendChild(destImage);
};

const createHeading = (data) => {
  const heading1 = document.createElement("h1");
  heading1.textContent = data.name;
  heading1.classList.add("heading-1");
  destContentDiv.appendChild(heading1);
};

const createContent = (data) => {
  const destDescription = document.createElement("p");
  destDescription.textContent = data.description;
  destDescription.classList.add("body-text");
  destContentDiv.appendChild(destDescription);
};

// Initial data load
destinationData();
