export const useCountries = () =>
  useState("countries", () => {
    const { data: countries } = useFetch("https://restcountries.com/v2/all");
    return countries;
  });
