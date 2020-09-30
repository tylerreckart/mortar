const path = require("path");

const config = {
  outdir: path.join(__dirname, "/build"),
  theme: "mortar",
  siteConfig: {
    url: "",
    name: "mortar.blog",
    icon:
      "https://emojis.slackmojis.com/emojis/images/1517005698/3450/mariobrick.png?1517005698",
    intro:
      "Welcome to Mortar",
  },
  seoConfig: {
    title: "",
    author: "",
    description:
      "",
  },
  socialConfig: {
    twitter: "",
  },
  integrations: {
    gaTrackingId: "",
  },
};

module.exports = config;
