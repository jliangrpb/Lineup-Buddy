import { MapQueries } from "./mapQueries";
import { MapIcons } from "./mapQueries";


export function displayMapInfo(mapName) {
  fetch(`https://valorant-api.com/v1/maps/`)
    .then((response) => response.json())
    .then((data) => {
      let mapData = data;
      try {
        MapQueries(mapData, mapName);
      } catch (error) {
        console.log("Map not found", error);
      }
    });
}

export function displayMapIcon(mapName) {
  fetch(`https://valorant-api.com/v1/maps/`)
    .then((response) => response.json())
    .then((data) => {
      let mapData = data;
      try {
        MapIcons(mapData, mapName);
      } catch (error) {
        console.log("Map not found", error);
      }
    });
}