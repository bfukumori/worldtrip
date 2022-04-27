interface Location {
  id: string;
  city: string;
  country: string;
  image: string;
  flag: string;
}

export interface ContinentData {
  id: string;
  name: string;
  text: string;
  totalCountries: number;
  totalLanguages: number;
  totalCities: number;
  locations: Location[];
}

export async function loadLocations(id: string) {
  const res = await fetch(`https://fake-server-rocketshoes.herokuapp.com/continents/${id}`);
  const continent: ContinentData = await res.json();

  return continent;
}

export async function loadContinents() {
  const response = await fetch(`https://fake-server-rocketshoes.herokuapp.com/continents`);
  const continents: ContinentData[] = await response.json();

  return continents;
}