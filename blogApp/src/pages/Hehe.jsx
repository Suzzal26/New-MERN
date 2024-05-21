import { useState } from "react";

const Hehe = () => {
  const [car, setCar] = useState({
    name: "rolls royce",
    model: "ghost",
    modelYear: 2009,
  });
  return (
    <div>
      {car.modelYear}
      <button
        onClick={() =>
          setCar((prev) => {
            return { ...prev, modelYear: 2011 };
          })
        }
      >
        Change Model Year
      </button>
    </div>
  );
};

export default Hehe;
