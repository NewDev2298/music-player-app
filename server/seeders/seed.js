const db = require('../config/connection');
const { User, Category, Songs } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const songSeeds = require('./songSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Songs.deleteMany({});
    await User.create(userSeeds);
    await Songs.create(songSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
