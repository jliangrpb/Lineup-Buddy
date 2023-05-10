import { displayMapInfo } from "./scripts/mapFetch.js";
import { displayMapIcon } from "./scripts/mapFetch.js";
import { displayAgentIcon } from "./scripts/agentIconFetch.js";


//default map setting and agent buttons
let selectedMap = "Ascent";
let selectedAgent = "Brimstone"

displayMapInfo(selectedMap);



// map icons
displayMapIcon("Ascent");
displayMapIcon("Split");
displayMapIcon("Fracture");
displayMapIcon("Bind");
displayMapIcon("Lotus");
displayMapIcon("Pearl");
displayMapIcon("Haven");


// agent icons
displayAgentIcon("Brimstone");
displayAgentIcon("Viper");
displayAgentIcon("Killjoy");
displayAgentIcon("Gekko");

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
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let FractureIcon = document.getElementById("FractureIcon");
  FractureIcon.addEventListener("click", function(e) {
    agentButtonsContainer.innerHTML = "";
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = ""
    selectedMap = "Fracture";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let BindIcon = document.getElementById("BindIcon");
  BindIcon.addEventListener("click", function(e) {
    agentButtonsContainer.innerHTML = "";
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = ""
    selectedMap = "Bind";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let LotusIcon = document.getElementById("LotusIcon");
  LotusIcon.addEventListener("click", function(e) {
    agentButtonsContainer.innerHTML = "";
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = ""
    selectedMap = "Lotus";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let PearlIcon = document.getElementById("PearlIcon");
  PearlIcon.addEventListener("click", function(e) {
    agentButtonsContainer.innerHTML = "";
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = ""
    selectedMap = "Pearl";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const agentButtonsContainer = document.querySelector(".agentButtons");
  const renderedPosition = document.querySelector(".PositionImg");
  const renderedLineup = document.querySelector(".LineupImg");
  let HavenIcon = document.getElementById("HavenIcon");
  HavenIcon.addEventListener("click", function(e) {
    agentButtonsContainer.innerHTML = "";
    renderedPosition.innerHTML = "";
    renderedLineup.innerHTML = ""
    selectedMap = "Haven";
    e.preventDefault();
    displayMapInfo(selectedMap);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const Brimstone = document.getElementById("BrimstoneIcon");
  const Viper = document.getElementById("ViperIcon");
  const Killjoy = document.getElementById("KilljoyIcon");
  const Gekko = document.getElementById("GekkoIcon");

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
    selectedAgent = "Killjoy";
    e.preventDefault();
    console.log ("Killjoy has been clicked!")
    displayAgentButtons(selectedAgent, selectedMap);
  });

  Gekko.addEventListener("click", function (e) {
    selectedAgent = "Gekko";
    e.preventDefault();
    console.log ("Gekko has been clicked!")
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
    const Wine_Default = createButton("./images/ascent/pos/wine_default_pos.jpg", "./images/ascent/lu/Wine_Default_lu.jpg");
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

    const A_Orb_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Orb_Default.style.position = "absolute";
    A_Orb_Default.style.top = "510px";
    A_Orb_Default.style.right = "630px";
    A_Orb_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Orb_Default);

    const A_Orb_Dices = createButton("./images/positions/img2.jpeg", "./images/lineup/img3.jpeg");
    A_Orb_Dices.style.position = "absolute";
    A_Orb_Dices.style.top = "500px";
    A_Orb_Dices.style.right = "625px";
    A_Orb_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Orb_Dices);

    const Cat_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Cat_Default.style.position = "absolute";
    Cat_Default.style.top = "550px";
    Cat_Default.style.right = "630px";
    Cat_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Default);

    const Cat_Dices = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Cat_Dices.style.position = "absolute";
    Cat_Dices.style.top = "560px";
    Cat_Dices.style.right = "635px";
    Cat_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Dices);

    const Back_B_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Back_B_Main_Default.style.position = "absolute";
    Back_B_Main_Default.style.top = "830px";
    Back_B_Main_Default.style.right = "550px";
    Back_B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Back_B_Main_Default);

    const B_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "810px";
    B_Main_Default.style.right = "640px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Ent_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Main_Ent_Default.style.position = "absolute";
    B_Main_Ent_Default.style.top = "735px";
    B_Main_Ent_Default.style.right = "695px";
    B_Main_Ent_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Ent_Default);

    const B_Market_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Market_Default.style.position = "absolute";
    B_Market_Default.style.top = "735px";
    B_Market_Default.style.right = "735px";
    B_Market_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Market_Default);
    
  } else if (agentName === "Viper" && mapName === "Ascent") {
    const Wine_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Wine_Default.style.position = "absolute";
    Wine_Default.style.top = "365px";
    Wine_Default.style.right = "620px";
    Wine_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Default);

    const Wine_Dices = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Wine_Dices.style.position = "absolute";
    Wine_Dices.style.top = "380px";
    Wine_Dices.style.right = "620px";
    Wine_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Dices);

    const A_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "505px";
    A_Main_Default.style.right = "570px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Dices = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Main_Dices.style.position = "absolute";
    A_Main_Dices.style.top = "520px";
    A_Main_Dices.style.right = "570px";
    A_Main_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Dices);

    const Cat_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Cat_Default.style.position = "absolute";
    Cat_Default.style.top = "545px";
    Cat_Default.style.right = "630px";
    Cat_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Default);

    const Cat_Dices = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Cat_Dices.style.position = "absolute";
    Cat_Dices.style.top = "560px";
    Cat_Dices.style.right = "630px";
    Cat_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Dices);

    const Back_B_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Back_B_Main_Default.style.position = "absolute";
    Back_B_Main_Default.style.top = "830px";
    Back_B_Main_Default.style.right = "550px";
    Back_B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Back_B_Main_Default);

    const B_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "810px";
    B_Main_Default.style.right = "640px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Ent_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Main_Ent_Default.style.position = "absolute";
    B_Main_Ent_Default.style.top = "735px";
    B_Main_Ent_Default.style.right = "695px";
    B_Main_Ent_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Ent_Default);
  } else if (agentName === "Killjoy" && mapName === "Ascent") {
    const Wine_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Wine_Default.style.position = "absolute";
    Wine_Default.style.top = "365px";
    Wine_Default.style.right = "620px";
    Wine_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Default);

    const Wine_Dices = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Wine_Dices.style.position = "absolute";
    Wine_Dices.style.top = "380px";
    Wine_Dices.style.right = "620px";
    Wine_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Dices);

    const Back_B_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    Back_B_Main_Default.style.position = "absolute";
    Back_B_Main_Default.style.top = "830px";
    Back_B_Main_Default.style.right = "600px";
    Back_B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Back_B_Main_Default);

  } else if (agentName === "Gekko" && mapName === "Ascent") {
    const A_Orb_Dices = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Orb_Dices.style.position = "absolute";
    A_Orb_Dices.style.top = "510px";
    A_Orb_Dices.style.right = "630px";
    A_Orb_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Orb_Dices);

    const A_Main_Dbl_Def = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Main_Dbl_Def.style.position = "absolute";
    A_Main_Dbl_Def.style.top = "515px";
    A_Main_Dbl_Def.style.right = "560px";
    A_Main_Dbl_Def.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Dbl_Def);
  } else if (agentName === "Brimstone" && mapName === "Split") {
    const A_Main_Default = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "420px";
    A_Main_Default.style.right = "520px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Corner = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "390px";
    A_Main_Corner.style.right = "540px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const B_Main_Open = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "870px";
    B_Main_Open.style.right = "520px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);

    const B_Main_Safe = createButton("./images/positions/img1.jpeg", "./images/lineup/img3.jpeg");
    B_Main_Safe.style.position = "absolute";
    B_Main_Safe.style.top = "930px";
    B_Main_Safe.style.right = "610px";
    B_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Safe);
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
