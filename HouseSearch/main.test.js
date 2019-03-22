const { houseSearch } = require("./main");
const { houseData } = require("./testData.data");

describe("House Search", () => {
  it("should be a defined", () => {
    expect(houseSearch).toBeDefined();
  });

  it("should be a function", () => {
    expect(houseSearch).toBeInstanceOf(Function);
  });

  it("should throw error if no parameter is given", () => {
    expect(houseSearch()).rejects.toMatch(
      "Missing house data, Please input house data"
    );
  });

  it("should return a result with properties", () => {
    expect(houseSearch(houseData)).toHaveProperty("byDistance");
    expect(houseSearch(houseData)).toHaveProperty("byNoOfRooms");
    expect(houseSearch(houseData)).toHaveProperty("byNoOfRooms");
  });
});
