import { fetchAndDisplayPokemons } from "./pokemon.module.js";

import { initClosingModalButtons } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  initClosingModalButtons();

  await fetchAndDisplayPokemons();
});
