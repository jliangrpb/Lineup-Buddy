import { displayMapInfo } from "./scripts/mapFetch.js";
import { displayMapIcon } from "./scripts/mapFetch.js";
import { displayAgentIcon } from "./scripts/agentIconFetch.js";


//default map setting and agent buttons
let selectedMap = "Ascent";
displayMapInfo(selectedMap);

let selectedAgent = "Brimstone";
// displayAgentButtons(selectedMap, selectedAgent);



// map icons
displayMapIcon("Ascent");
displayMapIcon("Split");
displayMapIcon("Fracture");
displayMapIcon("Bind");
displayMapIcon("Lotus");
displayMapIcon("Pearl");
displayMapIcon("Icebox");
displayMapIcon("Haven");


// agent icons
displayAgentIcon("Brimstone");
displayAgentIcon("Viper");
displayAgentIcon("Killjoy");
displayAgentIcon("Sova");

document.addEventListener("DOMContentLoaded", function() {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let AscentIcon = document.getElementById("AscentIcon");
  AscentIcon.addEventListener("click", function(e) {
      agentButtonsContainer.innerHTML = "";
      renderedPosition.innerHTML = "";
      renderedLineup.innerHTML = "";
    selectedMap = "Ascent";
    e.preventDefault();
    displayMapInfo(selectedMap);

  });
});

document.addEventListener("DOMContentLoaded", function() {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let SplitIcon = document.getElementById("SplitIcon");
  SplitIcon.addEventListener("click", function (e) {
    agentButtonsContainer.innerHTML = "";
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = "";
    selectedMap = "Split";
    e.preventDefault();
    displayMapInfo(selectedMap);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  let FractureIcon = document.getElementById("FractureIcon");
  FractureIcon.addEventListener("click", function(e) {
    selectedMap = "Fracture";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let BindIcon = document.getElementById("BindIcon");
  BindIcon.addEventListener("click", function(e) {
    selectedMap = "Bind";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let LotusIcon = document.getElementById("LotusIcon");
  LotusIcon.addEventListener("click", function(e) {
    selectedMap = "Lotus";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let PearlIcon = document.getElementById("PearlIcon");
  PearlIcon.addEventListener("click", function(e) {
    selectedMap = "Pearl";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let IceboxIcon = document.getElementById("IceboxIcon");
  IceboxIcon.addEventListener("click", function(e) {
    selectedMap = "Icebox";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let HavenIcon = document.getElementById("HavenIcon");
  HavenIcon.addEventListener("click", function(e) {
    selectedMap = "Haven";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const Brimstone = document.getElementById("BrimstoneIcon");
  const Viper = document.getElementById("ViperIcon");
  const Killjoy = document.getElementById("KilljoyIcon");
  const Sova = document.getElementById("SovaIcon");

  Brimstone.addEventListener("click", function (e) {
    selectedAgent = "Brimstone";
    e.preventDefault();
    console.log ("Brimstone has been clicked!")
    displayAgentButtons(selectedAgent, selectedMap);
  });

  Viper.addEventListener("click", function (e) {
    selectedAgent = "Viper";
    e.preventDefault();
    console.log ("Viper has been clicked!")
    displayAgentButtons(selectedAgent, selectedMap);
  });

  Killjoy.addEventListener("click", function (e) {
    selectedAgent = "KillJoy";
    e.preventDefault();
    console.log ("Killjoy has been clicked!")
    displayAgentButtons(selectedAgent, selectedMap);
  });

  Sova.addEventListener("click", function (e) {
    selectedAgent = "Sova";
    e.preventDefault();
    console.log ("Sova has been clicked!")
    displayAgentButtons(selectedAgent, selectedMap);
  });
});

function displayAgentButtons(agentName, mapName) {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");

  // Clear previous buttons and images
  agentButtonsContainer.innerHTML = "";
  renderedPosition.innerHTML = "";
  renderedLineup.innerHTML = "";

  // Check the agent and map conditions
  if (agentName === "Brimstone" && mapName === "Ascent") {
    const Wine_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Wine_Default.style.position = "absolute";
    Wine_Default.style.top = "375px";
    Wine_Default.style.right = "630px";
    Wine_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Default);

    const A_Main_Default = createButton("/images/positions/img2.jpeg", "/images/lineup/img4.jpeg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "510px";
    A_Main_Default.style.right = "590px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);
  } else if (agentName === "Brimstone" && mapName === "Split") {

  }

  
}

function createButton(posImgPath, luImgPath) {
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  const button = document.createElement("button");
  button.classList.add("additional-button");
  button.addEventListener("click", function () {
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = "";

    displayPosition(posImgPath);
    displayLineup(luImgPath);
  });
  return button;
}

function displayPosition(imagePath) {
    const renderedPosition = document.querySelector(".PositionImg")
    const image = document.createElement("img");
    image.src = imagePath;
    renderedPosition.appendChild(image);
}

function displayLineup(imagePath) {
    const renderedLineup = document.querySelector(".LineupImg")
    const image = document.createElement("img");
    image.src = imagePath;
    renderedLineup.appendChild(image);
}
