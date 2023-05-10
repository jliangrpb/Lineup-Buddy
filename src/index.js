import { displayMapInfo } from "./scripts/mapFetch.js";
import { displayMapIcon } from "./scripts/mapFetch.js";
import { displayAgentIcon } from "./scripts/agentIconFetch.js";


//default map setting and agent buttons
let selectedMap = "Ascent";
let selectedAgent = "Brimstone"

displayMapInfo(selectedMap);

document.addEventListener('DOMContentLoaded', function() {
  const modalIcon = document.getElementById('modalIcon');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('closeModalButton');

  // Function to open the modal
  function openModal() {
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }

  modalIcon.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);
});




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
    displayAgentButtons(selectedAgent, selectedMap);
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
    displayAgentButtons(selectedAgent, selectedMap);
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
    displayAgentButtons(selectedAgent, selectedMap);
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
    displayAgentButtons(selectedAgent, selectedMap);
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
    displayAgentButtons(selectedAgent, selectedMap);
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
    displayAgentButtons(selectedAgent, selectedMap);
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
    displayAgentButtons(selectedAgent, selectedMap);
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
    const Wine_Default = createButton("./images/ascent/brim/pos/wine_default_pos.jpg", "./images/ascent/brim/lu/Wine_Default_lu.jpg");
    Wine_Default.style.position = "absolute";
    Wine_Default.style.top = "375px";
    Wine_Default.style.right = "630px";
    Wine_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Default);

    const A_Main_Default = createButton("./images/ascent/brim/pos/back_a_main_def_pos.jpg", "./images/ascent/brim/lu/back_a_main_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "510px";
    A_Main_Default.style.right = "590px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Orb_Default = createButton("./images/ascent/brim/pos/a_orb_def_pos.jpg", "./images/ascent/brim/lu/a_orb_def_lu.jpg");
    A_Orb_Default.style.position = "absolute";
    A_Orb_Default.style.top = "510px";
    A_Orb_Default.style.right = "630px";
    A_Orb_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Orb_Default);

    const A_Orb_Dices = createButton("./images/ascent/brim/pos/a_orb_def_pos.jpg", "./images/ascent/brim/lu/a_orb_dices_lu.jpg");
    A_Orb_Dices.style.position = "absolute";
    A_Orb_Dices.style.top = "500px";
    A_Orb_Dices.style.right = "625px";
    A_Orb_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Orb_Dices);

    const Cat_Default = createButton("./images/ascent/brim/pos/cat_pos.jpg", "./images/ascent/brim/lu/cat_def_lu.jpg");
    Cat_Default.style.position = "absolute";
    Cat_Default.style.top = "550px";
    Cat_Default.style.right = "630px";
    Cat_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Default);

    const Cat_Dices = createButton("./images/ascent/brim/pos/cat_pos.jpg", "./images/ascent/brim/lu/cat_dices_lu.jpg");
    Cat_Dices.style.position = "absolute";
    Cat_Dices.style.top = "560px";
    Cat_Dices.style.right = "635px";
    Cat_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Dices);

    const Back_B_Main_Default = createButton("./images/ascent/brim/pos/back_b_main_def_pos.jpg", "./images/ascent/brim/lu/back_b_main_def_lu.jpg");
    Back_B_Main_Default.style.position = "absolute";
    Back_B_Main_Default.style.top = "830px";
    Back_B_Main_Default.style.right = "550px";
    Back_B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Back_B_Main_Default);

    const B_Main_Default = createButton("./images/ascent/brim/pos/b_main_def_pos.jpg", "./images/ascent/brim/lu/b_main_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "810px";
    B_Main_Default.style.right = "640px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Ent_Default = createButton("./images/ascent/brim/pos/b_main_ent_def_pos.jpg", "./images/ascent/brim/lu/b_main_ent_def_lu.jpg");
    B_Main_Ent_Default.style.position = "absolute";
    B_Main_Ent_Default.style.top = "735px";
    B_Main_Ent_Default.style.right = "695px";
    B_Main_Ent_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Ent_Default);

    const B_Market_Default = createButton("./images/ascent/brim/pos/b_logs_def.jpg", "./images/ascent/brim/lu/b_logs_def_lu.jpg");
    B_Market_Default.style.position = "absolute";
    B_Market_Default.style.top = "735px";
    B_Market_Default.style.right = "735px";
    B_Market_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Market_Default);
    
  } else if (agentName === "Viper" && mapName === "Ascent") {
    const Wine_Default = createButton("./images/ascent/Viper/pos/wine_def.jpg", "./images/ascent/Viper/lu/wine_def_lu.jpg");
    Wine_Default.style.position = "absolute";
    Wine_Default.style.top = "365px";
    Wine_Default.style.right = "620px";
    Wine_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Default);

    const Wine_Dices = createButton("./images/ascent/Viper/pos/wine_def.jpg", "./images/ascent/Viper/lu/wine_dices.jpg");
    Wine_Dices.style.position = "absolute";
    Wine_Dices.style.top = "380px";
    Wine_Dices.style.right = "620px";
    Wine_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Dices);

    const A_Main_Default = createButton("./images/ascent/Viper/pos/a_main_pos.jpg", "./images/ascent/Viper/lu/a_main_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "505px";
    A_Main_Default.style.right = "570px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Dices = createButton("./images/ascent/Viper/pos/a_main_pos.jpg", "./images/ascent/Viper/lu/a_main_dices_lu.jpg");
    A_Main_Dices.style.position = "absolute";
    A_Main_Dices.style.top = "520px";
    A_Main_Dices.style.right = "570px";
    A_Main_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Dices);

    const Cat_Default = createButton("./images/ascent/Viper/pos/cat_viper_pos.jpg", "./images/ascent/Viper/lu/cat_def_pos.jpg");
    Cat_Default.style.position = "absolute";
    Cat_Default.style.top = "545px";
    Cat_Default.style.right = "630px";
    Cat_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Default);

    const Cat_Dices = createButton("./images/ascent/Viper/pos/cat_viper_pos.jpg", "./images/ascent/Viper/lu/cat_dices_lu.jpg");
    Cat_Dices.style.position = "absolute";
    Cat_Dices.style.top = "560px";
    Cat_Dices.style.right = "630px";
    Cat_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Cat_Dices);

    const Back_B_Main_Default = createButton("./images/ascent/Viper/pos/back_b_main_def_pos.jpg", "./images/ascent/Viper/lu/back_b_main_def_lu.jpg");
    Back_B_Main_Default.style.position = "absolute";
    Back_B_Main_Default.style.top = "830px";
    Back_B_Main_Default.style.right = "550px";
    Back_B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Back_B_Main_Default);

    const B_Main_Default = createButton("./images/ascent/Viper/pos/b_main_def_pos.jpg", "./images/ascent/Viper/lu/b_main_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "810px";
    B_Main_Default.style.right = "640px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Ent_Default = createButton("./images/ascent/Viper/pos/b_main_ent_pos.jpg", "./images/ascent/Viper/lu/b_main_ent_lu.jpg");
    B_Main_Ent_Default.style.position = "absolute";
    B_Main_Ent_Default.style.top = "735px";
    B_Main_Ent_Default.style.right = "695px";
    B_Main_Ent_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Ent_Default);
  } else if (agentName === "Killjoy" && mapName === "Ascent") {
    const Wine_Default = createButton("./images/ascent/Killjoy/pos/wine_def_pos.jpg", "./images/ascent/Killjoy/lu/wine_def_lu.jpg");
    Wine_Default.style.position = "absolute";
    Wine_Default.style.top = "365px";
    Wine_Default.style.right = "620px";
    Wine_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Default);

    const Wine_Dices = createButton("./images/ascent/Killjoy/pos/wine_def_pos.jpg", "./images/ascent/Killjoy/lu/wine_dices_lu.jpg");
    Wine_Dices.style.position = "absolute";
    Wine_Dices.style.top = "380px";
    Wine_Dices.style.right = "620px";
    Wine_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(Wine_Dices);

    const Back_B_Main_Default = createButton("./images/ascent/Killjoy/pos/b_main_pos.jpg", "./images/ascent/Killjoy/lu/b_main_lu.jpg");
    Back_B_Main_Default.style.position = "absolute";
    Back_B_Main_Default.style.top = "830px";
    Back_B_Main_Default.style.right = "600px";
    Back_B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(Back_B_Main_Default);

  } else if (agentName === "Gekko" && mapName === "Ascent") {
    const A_Orb_Dices = createButton("./images/ascent/Gekko/pos/a_dices_pos.jpg", "./images/ascent/Gekko/lu/a_dices_lu.jpg");
    A_Orb_Dices.style.position = "absolute";
    A_Orb_Dices.style.top = "510px";
    A_Orb_Dices.style.right = "630px";
    A_Orb_Dices.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Orb_Dices);

    const A_Main_Dbl_Def = createButton("./images/ascent/Gekko/pos/a_def_pos.jpg", "./images/ascent/Gekko/lu/a_def_lu.jpg");
    A_Main_Dbl_Def.style.position = "absolute";
    A_Main_Dbl_Def.style.top = "515px";
    A_Main_Dbl_Def.style.right = "560px";
    A_Main_Dbl_Def.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Dbl_Def);
  } else if (agentName === "Brimstone" && mapName === "Split") {
    const A_Main_Default = createButton("./images/Split/Brimstone/pos/a_main_def_pos.jpg", "./images/Split/Brimstone/lu/a_main_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "420px";
    A_Main_Default.style.right = "520px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Corner = createButton("./images/Split/Brimstone/pos/a_corner_pos.jpg", "./images/Split/Brimstone/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "390px";
    A_Main_Corner.style.right = "540px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const B_Main_Open = createButton("./images/Split/Brimstone/pos/b_open_pos.jpg", "./images/Split/Brimstone/lu/b_open_lu.jpg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "870px";
    B_Main_Open.style.right = "520px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);

    const B_Main_Safe = createButton("./images/Split/Brimstone/pos/b_safe_pos.jpg", "./images/Split/Brimstone/lu/b_safe_lu.jpg");
    B_Main_Safe.style.position = "absolute";
    B_Main_Safe.style.top = "930px";
    B_Main_Safe.style.right = "610px";
    B_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Safe);
  } else if (agentName === "Killjoy" && mapName === "Split") {
    const A_Main_Default = createButton("./images/Split/Killjoy/pos/a_def_pos.jpg", "./images/Split/Killjoy/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "420px";
    A_Main_Default.style.right = "520px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Open = createButton("./images/Split/Killjoy/pos/a_open_pos.jpg", "./images/Split/Killjoy/lu/a_open_lu.jpg");
    A_Main_Open.style.position = "absolute";
    A_Main_Open.style.top = "390px";
    A_Main_Open.style.right = "540px";
    A_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Open);

    const B_Main_Safe = createButton("./images/Split/Killjoy/pos/b_def_pos.jpg", "./images/Split/Killjoy/lu/b_def_lu.jpg");
    B_Main_Safe.style.position = "absolute";
    B_Main_Safe.style.top = "930px";
    B_Main_Safe.style.right = "610px";
    B_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Safe);
  } else if (agentName === "Viper" && mapName === "Split") {
    const A_Main_Default = createButton("./images/Split/Viper/pos/a_def_pos.jpg", "./images/Split/Viper/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "420px";
    A_Main_Default.style.right = "520px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Corner = createButton("./images/Split/Viper/pos/a_corner_pos.jpg", "./images/Split/Viper/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "390px";
    A_Main_Corner.style.right = "540px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const B_Main_Open = createButton("./images/Split/Viper/pos/b_open_pos.jpg", "./images/Split/Viper/lu/b_open_lu.jpg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "850px";
    B_Main_Open.style.right = "540px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);

    const B_Main_Safe = createButton("./images/Split/Viper/pos/b_safe_pos.jpg", "./images/Split/Viper/lu/b_safe_lu.jpg");
    B_Main_Safe.style.position = "absolute";
    B_Main_Safe.style.top = "830px";
    B_Main_Safe.style.right = "500px";
    B_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Safe);
  } else if (agentName === "Brimstone" && mapName === "Fracture") {
    const A_Main_Default = createButton("./images/Fracture/Brimstone/pos/a_default_pos.jpg", "./images/Fracture/Brimstone/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "920px";
    A_Main_Default.style.right = "560px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Open = createButton("./images/Fracture/Brimstone/pos/a_open_pos.jpg", "./images/Fracture/Brimstone/lu/a_open_lu.jpg");
    A_Main_Open.style.position = "absolute";
    A_Main_Open.style.top = "810px";
    A_Main_Open.style.right = "400px";
    A_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Open);

    const B_Arcade_Default = createButton("./images/Fracture/Brimstone/pos/b_def_pos.jpg", "./images/Fracture/Brimstone/lu/b_def_lu.jpg");
    B_Arcade_Default.style.position = "absolute";
    B_Arcade_Default.style.top = "540px";
    B_Arcade_Default.style.right = "830px";
    B_Arcade_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Arcade_Default);

    const B_Main_Open = createButton("./images/Fracture/Brimstone/pos/b_open_pos.jpg", "./images/Fracture/Brimstone/lu/b_open_lu.jpg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "880px";
    B_Main_Open.style.right = "810px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);
  } else if (agentName === "Viper" && mapName === "Fracture") {
    const A_Main_Default = createButton("./images/Fracture/Viper/pos/a_def_pos.jpg", "./images/Fracture/Viper/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "780px";
    A_Main_Default.style.right = "520px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Arcade_Default = createButton("./images/Fracture/Viper/pos/b_def_pos.jpg", "./images/Fracture/Viper/lu/b_def_lu.jpg");
    B_Arcade_Default.style.position = "absolute";
    B_Arcade_Default.style.top = "540px";
    B_Arcade_Default.style.right = "830px";
    B_Arcade_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Arcade_Default);

    const B_Arcade_Open = createButton("./images/Fracture/Viper/pos/b_open_pos.jpg", "./images/Fracture/Viper/lu/b_open_lu.jpg");
    B_Arcade_Open.style.position = "absolute";
    B_Arcade_Open.style.top = "550px";
    B_Arcade_Open.style.right = "820px";
    B_Arcade_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Arcade_Open);
  } else if (agentName === "Killjoy" && mapName === "Fracture") {
    const A_Main_Corner = createButton("./images/Fracture/Killjoy/pos/a_corner_pos.jpg", "./images/Fracture/Killjoy/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "810px";
    A_Main_Corner.style.right = "400px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const A_Main_Open = createButton("./images/Fracture/Killjoy/pos/a_open_pos.jpg", "./images/Fracture/Killjoy/lu/a_open_lu.jpg");
    A_Main_Open.style.position = "absolute";
    A_Main_Open.style.top = "850px";
    A_Main_Open.style.right = "450px";
    A_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Open);

    const A_Drop_Default = createButton("./images/Fracture/Killjoy/pos/a_def2_pos.jpg", "./images/Fracture/Killjoy/lu/a_def2_lu.jpg");
    A_Drop_Default.style.position = "absolute";
    A_Drop_Default.style.top = "580px";
    A_Drop_Default.style.right = "450px";
    A_Drop_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Drop_Default);

    const B_Arcade_Default = createButton("./images/Fracture/Killjoy/pos/b_def_pos.jpg", "./images/Fracture/Killjoy/lu/b_def_lu.jpg");
    B_Arcade_Default.style.position = "absolute";
    B_Arcade_Default.style.top = "540px";
    B_Arcade_Default.style.right = "830px";
    B_Arcade_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Arcade_Default);

    const B_Main_Open = createButton("./images/Fracture/Killjoy/pos/b_open_pos.jpg", "./images/Fracture/Killjoy/lu/b_open_lu.jpg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "810px";
    B_Main_Open.style.right = "800px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);
  } else if (agentName === "Gekko" && mapName === "Fracture") {
    const B_Main_Open = createButton("./images/Fracture/Gekko/pos/b_open_pos.jpg", "./images/Fracture/Gekko/lu/b_open_lu.jpg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "810px";
    B_Main_Open.style.right = "800px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);
  } else if (agentName === "Brimstone" && mapName === "Bind") {
    const A_Main_Default = createButton("./images/Bind/Brimstone/pos/a_def1_pos.jpg", "./images/Bind/Brimstone/lu/a_def1_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "720px";
    A_Main_Default.style.right = "610px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Default2 = createButton("./images/Bind/Brimstone/pos/a_def2_pos.jpg", "./images/Bind/Brimstone/lu/a_def2_lu.jpg");
    A_Main_Default2.style.position = "absolute";
    A_Main_Default2.style.top = "660px";
    A_Main_Default2.style.right = "500px";
    A_Main_Default2.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default2);

    const A_Main_Default3 = createButton("./images/Bind/Brimstone/pos/a_def3_pos.jpg", "./images/Bind/Brimstone/lu/a_def3_lu.jpg");
    A_Main_Default3.style.position = "absolute";
    A_Main_Default3.style.top = "730px";
    A_Main_Default3.style.right = "510px";
    A_Main_Default3.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default3);

    const A_Main_Showers = createButton("./images/Bind/Brimstone/pos/a_showers_pos.jpg", "./images/Bind/Brimstone/lu/a_showers_lu.jpg");
    A_Main_Showers.style.position = "absolute";
    A_Main_Showers.style.top = "750px";
    A_Main_Showers.style.right = "450px";
    A_Main_Showers.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Showers);

    const B_Long_Center_Default = createButton("./images/Bind/Brimstone/pos/b_center_def_pos.jpg", "./images/Bind/Brimstone/lu/b_center_def_lu.jpg");
    B_Long_Center_Default.style.position = "absolute";
    B_Long_Center_Default.style.top = "620px";
    B_Long_Center_Default.style.right = "850px";
    B_Long_Center_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Long_Center_Default);

    const B_Short_Left_Default = createButton("./images/Bind/Brimstone/pos/b_left_def_pos.jpg", "./images/Bind/Brimstone/lu/b_left_def_lu.jpg");
    B_Short_Left_Default.style.position = "absolute";
    B_Short_Left_Default.style.top = "630px";
    B_Short_Left_Default.style.right = "680px";
    B_Short_Left_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Short_Left_Default);

    const B_Short_Right_Default = createButton("./images/Bind/Brimstone/pos/b_right_def_pos.jpg", "./images/Bind/Brimstone/lu/b_Right_def_lu.jpg");
    B_Short_Right_Default.style.position = "absolute";
    B_Short_Right_Default.style.top = "610px";
    B_Short_Right_Default.style.right = "680px";
    B_Short_Right_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Short_Right_Default);
  } else if (agentName === "Viper" && mapName === "Bind") {
    const A_Main_Default = createButton("./images/Bind/Viper/pos/a_def1_pos.jpg", "./images/Bind/Viper/lu/a_def1_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "660px";
    A_Main_Default.style.right = "500px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Default2 = createButton("./images/Bind/Viper/pos/a_def2_pos.jpg", "./images/Bind/Viper/lu/a_def2_lu.jpg");
    A_Main_Default2.style.position = "absolute";
    A_Main_Default2.style.top = "680px";
    A_Main_Default2.style.right = "580px";
    A_Main_Default2.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default2);

    const A_Main_Showers = createButton("./images/Bind/Viper/pos/a_def1_pos.jpg", "./images/Bind/Viper/lu/a_showers1_lu.jpg");
    A_Main_Showers.style.position = "absolute";
    A_Main_Showers.style.top = "660px";
    A_Main_Showers.style.right = "480px";
    A_Main_Showers.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Showers);

    const A_Main_Showers2 = createButton("./images/Bind/Viper/pos/a_showers2_pos.jpg", "./images/Bind/Viper/lu/a_showers2_lu.jpg");
    A_Main_Showers2.style.position = "absolute";
    A_Main_Showers2.style.top = "690px";
    A_Main_Showers2.style.right = "440px";
    A_Main_Showers2.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Showers2);

    const B_Long_Left_Default = createButton("./images/Bind/Viper/pos/b_left_def_pos.jpg", "./images/Bind/Viper/lu/b_left_def_lu.jpg");
    B_Long_Left_Default.style.position = "absolute";
    B_Long_Left_Default.style.top = "620px";
    B_Long_Left_Default.style.right = "850px";
    B_Long_Left_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Long_Left_Default);
    
    const B_Long_Right_Default = createButton("./images/Bind/Viper/pos/b_right_def_pos.jpg", "./images/Bind/Viper/lu/b_right_def_lu.jpg");
    B_Long_Right_Default.style.position = "absolute";
    B_Long_Right_Default.style.top = "720px";
    B_Long_Right_Default.style.right = "830px";
    B_Long_Right_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Long_Right_Default);
  } else if (agentName === "Killjoy" && mapName === "Bind") {
    const A_Main_Default = createButton("./images/Bind/Killjoy/pos/a_def_pos.jpg", "./images/Bind/Killjoy/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "660px";
    A_Main_Default.style.right = "480px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Showers_Triple = createButton("./images/Bind/Killjoy/pos/a_showers_pos.jpg", "./images/Bind/Killjoy/lu/a_showers_lu.jpg");
    A_Showers_Triple.style.position = "absolute";
    A_Showers_Triple.style.top = "700px";
    A_Showers_Triple.style.right = "380px";
    A_Showers_Triple.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Showers_Triple);

    const B_Long_Left_Default = createButton("./images/Bind/Killjoy/pos/b_def_pos.jpg", "./images/Bind/Killjoy/lu/b_left_def_lu.jpg");
    B_Long_Left_Default.style.position = "absolute";
    B_Long_Left_Default.style.top = "620px";
    B_Long_Left_Default.style.right = "850px";
    B_Long_Left_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Long_Left_Default);

    const B_Long_Right_Default = createButton("./images/Bind/Killjoy/pos/b_def_pos.jpg", "./images/Bind/Killjoy/lu/b_right_def_lu.jpg");
    B_Long_Right_Default.style.position = "absolute";
    B_Long_Right_Default.style.top = "600px";
    B_Long_Right_Default.style.right = "850px";
    B_Long_Right_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Long_Right_Default);
  } else if (agentName === "Brimstone" && mapName === "Lotus") {
    const A_Main_Left_Default = createButton("./images/Lotus/Brimstone/pos/a_def_pos.jpg", "./images/Lotus/Brimstone/lu/a_left_def_lu.jpg");
    A_Main_Left_Default.style.position = "absolute";
    A_Main_Left_Default.style.top = "730px";
    A_Main_Left_Default.style.right = "500px";
    A_Main_Left_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Left_Default);

    const A_Main_Right_Default = createButton("./images/Lotus/Brimstone/pos/a_def_pos.jpg", "./images/Lotus/Brimstone/lu/a_right_def_lu.jpg");
    A_Main_Right_Default.style.position = "absolute";
    A_Main_Right_Default.style.top = "750px";
    A_Main_Right_Default.style.right = "500px";
    A_Main_Right_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Right_Default);

    const B_Main_Default = createButton("./images/Lotus/Brimstone/pos/b_def_pos.jpg", "./images/Lotus/Brimstone/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "800px";
    B_Main_Default.style.right = "600px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const C_Main_Default = createButton("./images/Lotus/Brimstone/pos/c_safe_pos.jpg", "./images/Lotus/Brimstone/lu/c_safe_lu.jpg");
    C_Main_Default.style.position = "absolute";
    C_Main_Default.style.top = "830px";
    C_Main_Default.style.right = "790px";
    C_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Main_Default);

    const C_Main_Open = createButton("./images/Lotus/Brimstone/pos/c_safe_pos.jpg", "./images/Lotus/Brimstone/lu/c_open_lu.jpg");
    C_Main_Open.style.position = "absolute";
    C_Main_Open.style.top = "830px";
    C_Main_Open.style.right = "770px";
    C_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Main_Open);
  } else if (agentName === "Viper" && mapName === "Lotus") {
    const A_Main_Default = createButton("./images/Lotus/Viper/pos/a_def_pos.jpg", "./images/Lotus/Viper/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "730px";
    A_Main_Default.style.right = "500px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Main_Default = createButton("./images/Lotus/Viper/pos/b_def_pos.jpg", "./images/Lotus/Viper/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "700px";
    B_Main_Default.style.right = "640px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const C_Main_Open = createButton("./images/Lotus/Viper/pos/c_def_pos.jpg", "./images/Lotus/Viper/lu/c_open_lu.jpg");
    C_Main_Open.style.position = "absolute";
    C_Main_Open.style.top = "830px";
    C_Main_Open.style.right = "770px";
    C_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Main_Open);

    const C_Main_Safe = createButton("./images/Lotus/Viper/pos/c_def_pos.jpg", "./images/Lotus/Viper/lu/c_safe_lu.jpg");
    C_Main_Safe.style.position = "absolute";
    C_Main_Safe.style.top = "830px";
    C_Main_Safe.style.right = "790px";
    C_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Main_Safe);
  } else if (agentName === "Killjoy" && mapName === "Lotus") {
    const A_Main_Default = createButton("./images/Lotus/Killjoy/pos/a_def_pos.jpg", "./images/Lotus/Killjoy/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "710px";
    A_Main_Default.style.right = "420px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Main_Default = createButton("./images/Lotus/Killjoy/pos/b_def_pos.jpg", "./images/Lotus/Killjoy/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "810px";
    B_Main_Default.style.right = "610px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);
  } else if (agentName === "Brimstone" && mapName === "Pearl") {
    const A_Main_Default = createButton("./images/Pearl/Brimstone/pos/a_def_pos.jpg", "./images/Pearl/Brimstone/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "725px";
    A_Main_Default.style.right = "390px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Corner = createButton("./images/Pearl/Brimstone/pos/a_corner_pos.jpg", "./images/Pearl/Brimstone/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "705px";
    A_Main_Corner.style.right = "350px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const A_Art_Default = createButton("./images/Pearl/Brimstone/pos/a_def2_pos.jpg", "./images/Pearl/Brimstone/lu/a_def2_lu.jpg");
    A_Art_Default.style.position = "absolute";
    A_Art_Default.style.top = "610px";
    A_Art_Default.style.right = "520px";
    A_Art_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Art_Default);

    const A_Art_Corner = createButton("./images/Pearl/Brimstone/pos/a_corner2_pos.jpg", "./images/Pearl/Brimstone/lu/a_corner2_lu.jpg");
    A_Art_Corner.style.position = "absolute";
    A_Art_Corner.style.top = "590px";
    A_Art_Corner.style.right = "520px";
    A_Art_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Art_Corner);

    const B_Main_Default = createButton("./images/Pearl/Brimstone/pos/b_def_pos.jpg", "./images/Pearl/Brimstone/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "825px";
    B_Main_Default.style.right = "850px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Open = createButton("./images/Pearl/Brimstone/pos/b_open_pos.jpg", "./images/Pearl/Brimstone/lu/b_open_lu.jpg");
    B_Main_Open.style.position = "absolute";
    B_Main_Open.style.top = "825px";
    B_Main_Open.style.right = "830px";
    B_Main_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Open);
  } else if (agentName === "Viper" && mapName === "Pearl") {
    const A_Main_Default = createButton("./images/Pearl/Viper/pos/a_def_pos.jpg", "./images/Pearl/Viper/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "695px";
    A_Main_Default.style.right = "330px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const A_Main_Corner = createButton("./images/Pearl/Viper/pos/a_def_pos.jpg", "./images/Pearl/Viper/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "695px";
    A_Main_Corner.style.right = "330px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const B_Main_Default = createButton("./images/Pearl/Viper/pos/b_def_pos.jpg", "./images/Pearl/Viper/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "820px";
    B_Main_Default.style.right = "900px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Corner = createButton("./images/Pearl/Viper/pos/b_def_pos.jpg", "./images/Pearl/Viper/lu/b_safe_lu.jpg");
    B_Main_Corner.style.position = "absolute";
    B_Main_Corner.style.top = "800px";
    B_Main_Corner.style.right = "900px";
    B_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Corner);
  } else if (agentName === "Killjoy" && mapName === "Pearl") {
    const A_Main_Corner = createButton("./images/Pearl/Killjoy/pos/a_corner_pos.jpg", "./images/Pearl/Killjoy/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "705px";
    A_Main_Corner.style.right = "350px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const A_Main_Default = createButton("./images/Pearl/Killjoy/pos/a_def_pos.jpg", "./images/Pearl/Killjoy/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "695px";
    A_Main_Default.style.right = "330px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Main_Default = createButton("./images/Pearl/Killjoy/pos/b_def_pos.jpg", "./images/Pearl/Killjoy/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "820px";
    B_Main_Default.style.right = "900px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Safe = createButton("./images/Pearl/Killjoy/pos/b_def_pos.jpg", "./images/Pearl/Killjoy/lu/b_safe_lu.jpg");
    B_Main_Safe.style.position = "absolute";
    B_Main_Safe.style.top = "820px";
    B_Main_Safe.style.right = "930px";
    B_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Safe);
  }  else if (agentName === "Gekko" && mapName === "Pearl") {
    const A_Main_Corner = createButton("./images/Pearl/Gekko/pos/a_corner_pos.jpg", "./images/Pearl/Gekko/lu/a_corner_lu.jpg");
    A_Main_Corner.style.position = "absolute";
    A_Main_Corner.style.top = "705px";
    A_Main_Corner.style.right = "350px";
    A_Main_Corner.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Corner);

    const A_Main_Default = createButton("./images/Pearl/Gekko/pos/a_def_pos.jpg", "./images/Pearl/Gekko/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "695px";
    A_Main_Default.style.right = "330px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Main_Default = createButton("./images/Pearl/Gekko/pos/b_def_pos.jpg", "./images/Pearl/Gekko/lu/b_def_lu.jpg");
    B_Main_Default.style.position = "absolute";
    B_Main_Default.style.top = "820px";
    B_Main_Default.style.right = "900px";
    B_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Default);

    const B_Main_Safe = createButton("./images/Pearl/Gekko/pos/b_def_pos.jpg", "./images/Pearl/Gekko/lu/b_safe_lu.jpg");
    B_Main_Safe.style.position = "absolute";
    B_Main_Safe.style.top = "820px";
    B_Main_Safe.style.right = "930px";
    B_Main_Safe.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Safe);
  } else if (agentName === "Brimstone" && mapName === "Haven") {
    const A_Main_Left_Default = createButton("./images/Haven/Brimstone/pos/a_left_def_pos.jpg", "./images/Haven/Brimstone/lu/a_left_def_lu.jpg");
    A_Main_Left_Default.style.position = "absolute";
    A_Main_Left_Default.style.top = "440px";
    A_Main_Left_Default.style.right = "560px";
    A_Main_Left_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Left_Default);

    const A_Main_Right_Default = createButton("./images/Haven/Brimstone/pos/a_right_def_pos.jpg", "./images/Haven/Brimstone/lu/a_right_def_lu.jpg");
    A_Main_Right_Default.style.position = "absolute";
    A_Main_Right_Default.style.top = "510px";
    A_Main_Right_Default.style.right = "530px";
    A_Main_Right_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Right_Default);

    const B_Main_Right_Default = createButton("./images/Haven/Brimstone/pos/b_right_def_pos.jpg", "./images/Haven/Brimstone/lu/b_right_def_lu.jpg");
    B_Main_Right_Default.style.position = "absolute";
    B_Main_Right_Default.style.top = "620px";
    B_Main_Right_Default.style.right = "540px";
    B_Main_Right_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Right_Default);

    const B_Main_Left_Default = createButton("./images/Haven/Brimstone/pos/b_left_def_pos.jpg", "./images/Haven/Brimstone/lu/b_left_def_lu.jpg");
    B_Main_Left_Default.style.position = "absolute";
    B_Main_Left_Default.style.top = "620px";
    B_Main_Left_Default.style.right = "440px";
    B_Main_Left_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Main_Left_Default);

    const C_Main_Default = createButton("./images/Haven/Brimstone/pos/c_def_pos.jpg", "./images/Haven/Brimstone/lu/c_def_lu.jpg");
    C_Main_Default.style.position = "absolute";
    C_Main_Default.style.top = "850px";
    C_Main_Default.style.right = "550px";
    C_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Main_Default);

    const C_Long_Backsite = createButton("./images/Haven/Brimstone/pos/c_long_pos.jpg", "./images/Haven/Brimstone/lu/c_backsite_lu.jpg");
    C_Long_Backsite.style.position = "absolute";
    C_Long_Backsite.style.top = "900px";
    C_Long_Backsite.style.right = "470px";
    C_Long_Backsite.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Long_Backsite);

    const C_Long_Open = createButton("./images/Haven/Brimstone/pos/c_long_pos.jpg", "./images/Haven/Brimstone/lu/c_open_lu.jpg");
    C_Long_Open.style.position = "absolute";
    C_Long_Open.style.top = "900px";
    C_Long_Open.style.right = "490px";
    C_Long_Open.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Long_Open);
  } else if (agentName === "Viper" && mapName === "Haven") {
    const A_Main_Default = createButton("./images/Haven/Viper/pos/a_def_pos.jpg", "./images/Haven/Viper/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "440px";
    A_Main_Default.style.right = "560px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Spawn_Default = createButton("./images/Haven/Viper/pos/b_def_pos.jpg", "./images/Haven/Viper/lu/b_def_lu.jpg");
    B_Spawn_Default.style.position = "absolute";
    B_Spawn_Default.style.top = "670px";
    B_Spawn_Default.style.right = "340px";
    B_Spawn_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Spawn_Default);

    const C_Long_Default = createButton("./images/Haven/Viper/pos/c_def_pos.jpg", "./images/Haven/Viper/lu/c_def_lu.jpg");
    C_Long_Default.style.position = "absolute";
    C_Long_Default.style.top = "770px";
    C_Long_Default.style.right = "440px";
    C_Long_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Long_Default);
  } else if (agentName === "Killjoy" && mapName === "Haven") {
    const A_Main_Default = createButton("./images/Haven/Killjoy/pos/a_def_pos.jpg", "./images/Haven/Killjoy/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "530px";
    A_Main_Default.style.right = "530px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Spawn_Default = createButton("./images/Haven/Killjoy/pos/b_def_pos.jpg", "./images/Haven/Killjoy/lu/b_def_lu.jpg");
    B_Spawn_Default.style.position = "absolute";
    B_Spawn_Default.style.top = "650px";
    B_Spawn_Default.style.right = "410px";
    B_Spawn_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Spawn_Default);

    const C_Long_Default = createButton("./images/Haven/Killjoy/pos/c_def_pos.jpg", "./images/Haven/Killjoy/lu/c_def_lu.jpg");
    C_Long_Default.style.position = "absolute";
    C_Long_Default.style.top = "840px";
    C_Long_Default.style.right = "470px";
    C_Long_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Long_Default);
  } else if (agentName === "Gekko" && mapName === "Haven") {
    const A_Main_Default = createButton("./images/Haven/Gekko/pos/a_def_pos.jpg", "./images/Haven/Gekko/lu/a_def_lu.jpg");
    A_Main_Default.style.position = "absolute";
    A_Main_Default.style.top = "530px";
    A_Main_Default.style.right = "530px";
    A_Main_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(A_Main_Default);

    const B_Spawn_Default = createButton("./images/Haven/Gekko/pos/b_def_pos.jpg", "./images/Haven/Gekko/lu/b_def_lu.jpg");
    B_Spawn_Default.style.position = "absolute";
    B_Spawn_Default.style.top = "650px";
    B_Spawn_Default.style.right = "410px";
    B_Spawn_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(B_Spawn_Default);

    const C_Long_Default = createButton("./images/Haven/Gekko/pos/c_def_pos.jpg", "./images/Haven/Gekko/lu/c_def_lu.jpg");
    C_Long_Default.style.position = "absolute";
    C_Long_Default.style.top = "840px";
    C_Long_Default.style.right = "470px";
    C_Long_Default.style.zIndex = "1";
    agentButtonsContainer.appendChild(C_Long_Default);
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
