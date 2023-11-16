import {ALL_COUNTRIES, DETAIL, ALL_COUNTRIES_COPY} from "./actions-types";
import axios from "axios";

export const setAllCountries = (allCountries) => {
  return async (dispatch) =>{
    try {
      let imagesCountries = {};
      for (const country of allCountries) {
        const { data } = await axios(`https://pixabay.com/api/?key=40697066-f002b0ba72a46a22f2f0b5485&q=${country.name}&image_type=photo`);
        imagesCountries[country.name] = data.hits[1]?.webformatURL;
      }
      let countriesWithImages = allCountries.map((country)=>
        ({
          ...country,
          image: imagesCountries[country.name]
        }))
      return dispatch({
        type: ALL_COUNTRIES,
        payload: countriesWithImages
      })
    } catch (error) {
      console.error("Error:", error)
    }
  }
}
  export const setDetail = (detailCountry) => (
    {
    type: DETAIL,
    payload: detailCountry
  })
  export const setAllCountriesCopy = (allCountries) => (
    {
    type: ALL_COUNTRIES_COPY,
    payload: allCountries
  }
  )