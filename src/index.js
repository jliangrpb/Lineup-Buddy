import { displayMapInfo } from "./scripts/mapFetch.js";
import { displayMapIcon } from "./scripts/mapFetch.js";
import { displayAgentIcon } from "./scripts/agentIconFetch";

//default map setting
let mapName = "Ascent";
displayMapInfo(mapName);


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
  let AscentIcon = document.getElementById("AscentIcon");
  AscentIcon.addEventListener("click", function(e) {
    mapName = "Ascent";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let SplitIcon = document.getElementById("SplitIcon");
  SplitIcon.addEventListener("click", function (e) {
    mapName = "Split";
    e.preventDefault();
    displayMapInfo(mapName);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  let FractureIcon = document.getElementById("FractureIcon");
  FractureIcon.addEventListener("click", function(e) {
    mapName = "Fracture";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let BindIcon = document.getElementById("BindIcon");
  BindIcon.addEventListener("click", function(e) {
    mapName = "Bind";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let LotusIcon = document.getElementById("LotusIcon");
  LotusIcon.addEventListener("click", function(e) {
    mapName = "Lotus";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let PearlIcon = document.getElementById("PearlIcon");
  PearlIcon.addEventListener("click", function(e) {
    mapName = "Pearl";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let IceboxIcon = document.getElementById("IceboxIcon");
  IceboxIcon.addEventListener("click", function(e) {
    mapName = "Icebox";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let HavenIcon = document.getElementById("HavenIcon");
  HavenIcon.addEventListener("click", function(e) {
    mapName = "Haven";
    e.preventDefault();
    displayMapInfo(mapName);
  });
});

