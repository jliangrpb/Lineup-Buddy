import { AgentIcon } from "./agentQueries";

export function displayAgentIcon(agentName) {
  fetch(`https://valorant-api.com/v1/agents/`)
    .then((response) => response.json())
    .then((data) => {
      let agentData = data;
      try {
        AgentIcon(agentData, agentName);
      } catch (error) {
        console.log("Agent not found", error);
      }
    });
}