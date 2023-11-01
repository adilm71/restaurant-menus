const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    const newRestaurant = await Restaurant.create({
      name: "Example Restaurant",
      location: "Example Location",
      cuisine: "Example Cuisine",
    });
    expect(newRestaurant.name).toBe("Example Restaurant");
    expect(newRestaurant.location).toBe("Example Location");
    expect(newRestaurant.cuisine).toBe("Example Cuisine");
  });

  test("can create a Menu", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can find Menus", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });
});
