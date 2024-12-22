const data = [
  {
    location: "London",
    latitude: 51.5072,
    longitude: 0.1276,
  },
  {
    location: "Dhaka",
    latitude: 23.685,
    longitude: 90.3563,
  },
  {
    location: "Savar",
    latitude: 23.8479,
    longitude: 90.2577,
  },
  {
    location: "Paris",
    latitude: 48.8575,
    longitude: 2.3514,
  },
  {
    location: "Germany",
    latitude: 51.1657,
    longitude: 10.4515,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: 74.006,
  },
  {
    location: "Melbourne",
    latitude: 37.8136,
    longitude: 144.9631,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Pakistan",
    latitude: 30.3753,
    longitude: 69.3451,
  },
  {
    location: "Riyadh",
    latitude: 24.7136,
    longitude: 46.6753,
  },
];

function getLocation() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocation, getLocationByName };
