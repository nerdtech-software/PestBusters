import CheckIcon from '@mui/icons-material/Check';
import React from "react";
const Locations = () => {
  const locations = [
    {
      county: "Washington County",
      areas: [
        "Chatom",
        "Tibbie",
        "Millry",
        "Fruitdale",
        "Deer Park",
        "McIntosh",
        "Wagarville",
        "Leroy",
        "Saint Stephens",
        "Vinegar Bend",
        "Sunflower",
      ],
    },
    {
      county: "Choctaw County",
      areas: ["Gilbertown", "Silas", "Toxey"],
    },
    {
      county: "Clarke County",
      areas: ["Jackson", "Grove Hill", "Thomasville", "Coffeeville"],
    },
    {
      county: "Mobile County",
      areas: [
        "Mobile",
        "Citronelle",
        "Saraland",
        "Semmes",
        "Creola",
        "Axis",
        "LeMoyne",
        "Bucks",
        "Chastang",
        "Mt Vernon",
        "Calvert",
        "Chunchula",
        "Georgetown",
        "Wilmer",
        "Mauvilla",
        "Eight Mile",
        "Chickasaw",
        "Prichard",
        "Tillmans Corner",
        "Theodore",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Locations We Service
        </h2>
        <div className=" gap-2">
          {locations.map((location, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-black ">
                {location.county}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {location.areas.map((area, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 gap-2 text-sm"
                  >
                    <span className="text-green-500"><CheckIcon/></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
