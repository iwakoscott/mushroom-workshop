const { RESTDataSource } = require("apollo-datasource-rest");

class MushroomAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://mushroomobserver.org/api/";
  }

  mushroomReducer(data) {
    return {
      id: data.id,
      date: data.date,
      latitude: data.latitude,
      longitude: data.longitude,
      consensus: {
        name: data.consensus.name
      },
      location: {
        name: data.location.name
      }
    };
  }

  async getMushroomsFrom({
    north = 38.0461,
    east = -122.801,
    south = 38.0393,
    west = -122.83
  }) {
    const response = await this.get(`observations`, {
      north,
      east,
      south,
      west,
      format: "json",
      detail: "low"
    });

    return response.results.map(this.mushroomReducer);
  }
}

module.exports = MushroomAPI;
