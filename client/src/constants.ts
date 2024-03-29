// Constant data relating to mythic+.
export const DATA = {
  keystones: [
    {
      chest: 402,
      level: 2,
      scaling: 0,
      vault: 415,
    },
    {
      chest: 408,
      level: 5,
      scaling: 26,
      vault: 421,
    },
    {
      chest: 415,
      level: 10,
      scaling: 85,
      vault: 431,
    },
    {
      chest: 424,
      level: 15,
      scaling: 198,
      vault: 437,
    },
    {
      chest: 431,
      level: 20,
      scaling: 380,
      vault: 447,
    },
  ],
};

// Paths used in app.
export const PATHS = {
  addCharacter: "/characters/add",
  affixes: "/affixes",
  api: "https://mythicdb.onrender.com/api",
  character: "/characters/:region/:realm/:name",
  leaderboard: "/leaderboard",
  newPlayer: "/introduction",
  searchResults: "/characters",
};

// Strings needed in app.
export const STRINGS = {
  app: "MythicDB",
  addBtn: "Add",
  dungeon: "Dungeon",
  keyLevel: "Level",
  nameLabel: "Name",
  realmLabel: "Realm",
  regionLabel: "Region",
  searchPlaceholder: "Search for characters",
  cards: {
    addCharacter: {
      description:
        "Can't find your character?\n\nClick here to add them to the database.",
    },
    affixes: {
      title: "Affixes",
      description:
        "View the affixes for this week and get information on what they do.",
    },
    intro: {
      title: "Welcome to the database",
      description:
        "Not sure where to go? You can find links to various pages below.\n\nYou can also type a name into the search bar to find a character!",
    },
    newPlayer: {
      title: "New Players",
      description:
        "New to Mythic+? Click here to be redirected to the information page.",
    },
  },
  newPlayer: {
    chestHeader: "Dungeon Chest",
    keystoneHeader: "Keystone Level",
    scaleHeader: "Increased Health and Damage",
    vaultHeader: "Great Vault",
    affixes: {
      title: "Affixes",
      description:
        "In addition to having more health and damage, keystones also add challenges called affixes that further increase the difficulty of the dungeon.\n\nAffixes are on a weekly rotation, and you can view the active affixes for this week by clicking here.",
    },
    gear: {
      title: "Gear",
      description:
        "As a reward for completing these challenging dungeons you'll also receive progressively better gear.\n\nGear is obtained in two ways, from the end of dungeon chest and from your weekly great vault options. Here's the breakdown;",
      note: "Note: Gear rewards cap at +20",
    },
    introduction: {
      title: "What is Mythic+",
      description:
        "Mythic+ is a type of infinitely scaling content that allows dungeons to remain challenging throughout an expansion.\n\nNo matter your skill level there will always be a key level that provides sufficient challenge for you.",
    },
    keyExplanation: {
      title: "How it works",
      description:
        "When you complete a mythic dungeon you will receive a keystone. A keystone can only be used at the corresponding dungeon and has a level associated to it.\n\nAs the keystone level increases enemies in the dungeon will have progressively more health and damage. Here's the breakdown;",
      note: "Note: This list is not comprehensive",
    },
  },
};
