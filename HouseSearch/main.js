function houseSearch(options) {
  // Check if data exist
  if (!options)
    return Promise.reject(
      new Error(`Missing house data, Please input house data`)
    );

  // Sort by Distance to Eberswalder Straße 55
  function sortByDistance() {
    const housesByLowestDistance = options.houses.sort((a, b) => {
      a.coords = { lat: 52.5418739, lon: 13.4057378 };
      return a.coords - b.coords;
    });
    return housesByLowestDistance;
  }

  // Sort by number of rooms more than five
  function sortByNoOfRooms() {
    const housesWithRoomsGreaterThanFive = [];
    options.houses.map(house => {
      if (
        house["params"] !== undefined &&
        house["params"].rooms !== undefined &&
        house["params"].rooms > 5
      ) {
        return housesWithRoomsGreaterThanFive.push(house);
      }
    });

    const houseResult = housesWithRoomsGreaterThanFive.sort((a, b) => {
      return a.params.rooms - b.params.rooms;
    });
    return houseResult;
  }

  // Sort by houses without complete data
  function sortByStreetName() {
    const houseWithNoCompleteData = [];
    options.houses.map(house => {
      if (
        Object.keys(house).length < 3 ||
        Object.keys(house.params) === undefined ||
        Object.keys(house["params"]).length < 2
      )
        houseWithNoCompleteData.push(house);
    });
    return houseWithNoCompleteData;
  }

  const byDistance = sortByDistance();
  const byNoOfRooms = sortByNoOfRooms();
  const byStreet = sortByStreetName();

  let searchResult = {
    byDistance,
    byNoOfRooms,
    byStreet
  };
  return searchResult;
}

exports.houseSearch = houseSearch;
