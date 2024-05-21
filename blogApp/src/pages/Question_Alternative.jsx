import { useState } from "react";

const Question_Alternative = () => {
  const countries = [
    {
      Name: "Nepal",
      City: ["KTM", "PKR", "BRT"],
      Image: "../images/nepal.gif",
    },
    {
      Name: "India",
      City: ["Mumbai", "Goa", "Delhi"],
      Image: "../images/india.gif",
    },
    {
      Name: "China",
      City: ["Beijing", "Shanghai", "Chengdu"],
      Image: "../images/china.gif",
    },
  ];

  const [country, selectedCountry] = useState("");
  const [city, setCity] = useState([]);
  const [image, setImage] = useState("");

  const change = (event) => {
    const countryName = event.target.value;
    selectedCountry(countryName);

    const selectedCountryData = countries.find((c) => c.Name === countryName);

    if (selectedCountryData) {
      setImage(selectedCountryData.Image);
      setCity(selectedCountryData.City);
    } else {
      setImage("");
      setCity([]);
    }
  };

  return (
    <div>
      <div>
        <label>Select a country</label>
        <select value={country} onChange={change}>
          <option value="">Select a country</option>
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="China">China</option>
        </select>
      </div>
      <br />
      {image && (
        <div>
          <img
            src={image}
            alt={country}
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}
      <br />
      <div>
        <label>Select the city</label>
        <select>
          <option value="">Select a city</option>
          {city.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Question_Alternative;
