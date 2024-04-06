import React, { useState } from "react";
import { Box, Container, Select, VStack, Text } from "@chakra-ui/react";

const countriesData = {
  USA: { currency: "USD", states: ["California", "Texas", "Florida"] },
  Canada: { currency: "CAD", states: ["Ontario", "Quebec", "British Columbia"] },
  // ... add more countries as needed
};

const statesData = {
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Texas: ["Houston", "Dallas", "Austin"],
  // ... add more states and cities as needed
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [currency, setCurrency] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCurrency(countriesData[country].currency);
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(statesData[state] || []);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text mb={2}>Select Country:</Text>
          <Select placeholder="Select country" onChange={handleCountryChange}>
            {Object.keys(countriesData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
        </Box>

        {selectedCountry && (
          <Box>
            <Text mb={2}>Currency:</Text>
            <Text>{currency}</Text>
          </Box>
        )}

        {selectedCountry && (
          <Box>
            <Text mb={2}>Select State:</Text>
            <Select placeholder="Select state" onChange={handleStateChange}>
              {(countriesData[selectedCountry]?.states || []).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </Box>
        )}

        {selectedState && (
          <Box>
            <Text mb={2}>Select City:</Text>
            <Select placeholder="Select city">
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
