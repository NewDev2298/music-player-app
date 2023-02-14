const db = require('../config/connection');
const { User, Category, Songs } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const songSeeds = require('./songSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Category.deleteMany({});
    await Songs.deleteMany({});
    await User.create(userSeeds);
    await Category.create({});
    await Songs.create({});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
