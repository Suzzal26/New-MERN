import { useState } from "react";

const Question = () => {
  const countries = [
    { name: "Nepal", cities: ["KTM", "PKR", "BTL"] },
    { name: "India", cities: ["Banglore", "Mumbai"] },
    { name: "China", cities: ["Beijing", "Shanghai"] },
  ];

  const [Country, selected] = useState("");
  const [cities, selectedCities] = useState([]);

  const change = (event) => {
    const countryName = event.target.value;
    selected(countryName);
    const country = countries.find((country) => country.name === countryName);
    selectedCities(country ? country.cities : []);
  };

  return (
    <div>
      <h1>Question</h1>
      <div>
        <label htmlFor="country">Select Country: </label>
        <select id="country" value={selected} onChange={change}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {cities.length > 0 && (
        <div>
          <label htmlFor="city">Select City: </label>
          <select id="city">
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Question;
