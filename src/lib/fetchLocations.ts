interface Location {
  id: string;
  city: string;
  country: string;
  image: string;
  flag: string;
}

type ContinentData = {
  id: string;
  name: string;
  text: string;
  totalCountries: number;
  totalLanguages: number;
  totalCities: number;
  locations: Location[];
}

export async function loadLocations(name: string) {

  const res = await fetch(`http://localhost:3000/api/locations/${name}`);
  const continent: ContinentData = await res.json();

  return continent;
}