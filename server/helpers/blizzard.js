// Require environment variables.
require("dotenv").config();
const { BLIZZARD_ACCESS_TOKEN } = process.env;

// Character profile API endpoint.
const characterUri = (name, realm) => {
  return `https://us.api.blizzard.com/profile/wow/character/${realm}/${name}?namespace=profile-us&locale=en_US&access_token=${BLIZZARD_ACCESS_TOKEN}`;
};

// Character media API endpoint.
const characterMediaUri = (name, realm) => {
  return `https://us.api.blizzard.com/profile/wow/character/${realm}/${name}/character-media?namespace=profile-us&locale=en_US&access_token=${BLIZZARD_ACCESS_TOKEN}`;
};

// Realms endpoint.
const realmsUri = () => {
  return `https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-us&locale=en_US&access_token=${BLIZZARD_ACCESS_TOKEN}`;
};

// Character mythic plus profile API endpoint.
const mythicPlusUri = (name, realm) => {
  return `https://us.api.blizzard.com/profile/wow/character/${realm}/${name}/mythic-keystone-profile/season/8?namespace=profile-us&locale=en_US&access_token=${BLIZZARD_ACCESS_TOKEN}`;
};

module.exports = {
  characterUri,
  characterMediaUri,
  realmsUri,
  mythicPlusUri,
};
