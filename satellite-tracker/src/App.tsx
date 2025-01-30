import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SatelliteDetails from "./components/SatelliteDetails";
import Map from "./components/Map";
import axios from "axios";

interface SatelliteData {
  info: { name: string };
  positions: {
    satlatitude: number;
    satlongitude: number;
    satelliteVelocity: number;
  }[];
}

const App: React.FC = () => {
  const [satelliteData, setSatelliteData] = useState<SatelliteData | null>(
    null
  );

  const fetchSatelliteData = async (id: string) => {
    try {
      const response = await axios.get(`/api/satellites/${id}`);
      setSatelliteData(response.data);
    } catch (error) {
      console.error("Error fetching satellite data:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchSatelliteData} />
      <SatelliteDetails data={satelliteData} />
      {satelliteData && (
        <Map
          lat={satelliteData.positions[0].satlatitude}
          lon={satelliteData.positions[0].satlongitude}
        />
      )}
    </div>
  );
};

export default App;

// The App component is the main component of the application. It contains the state for the satellite data and a function to fetch the data from the server. The component renders a SearchBar component, a SatelliteDetails component, and a Map component. The SearchBar component is used to search for satellite data by entering a satellite ID. The SatelliteDetails component displays details about the satellite, such as its name, speed, latitude, and longitude. The Map component displays a map with a marker at the satellite's location. The latitude and longitude for the marker are taken from the satellite data. The App component uses the useState hook to manage the state of the satellite data and the fetchSatelliteData function to fetch the data from the server. The fetchSatelliteData function is called when the user enters a satellite ID and clicks the search button in the SearchBar component. The satellite data is then passed to the SatelliteDetails and Map components as props. If the satellite data is not null, the Map component is rendered with the latitude and longitude of the satellite's location. Otherwise, the Map component is not rendered.
