import { continents } from "../../data";

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

// const url = "" //API url

export async function loadLocations(id: string) {
  // const response = await fetch(`${url}/continents/${id}`);
  // const continent: ContinentData = await response.json();

  // return continent;
  return continents.find(continent=>continent.id===id) 
}

export async function loadContinents() {
  // const response = await fetch(`${url}/continents`);
  // const continents: ContinentData[] = await response.json();

  // return continents;
  return continents
}