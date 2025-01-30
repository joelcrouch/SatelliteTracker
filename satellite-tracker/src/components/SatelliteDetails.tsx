import React from "react";

interface SatelliteData {
  info: { name: string };
  positions: {
    satlatitude: number;
    satlongitude: number;
    satelliteVelocity: number;
  }[];
}

interface SatelliteDetailsProps {
  data: SatelliteData | null;
}

const SatelliteDetails: React.FC<SatelliteDetailsProps> = ({ data }) => {
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h2>Satellite Details</h2>
      <p>
        <strong>Name:</strong> {data.info.name}
      </p>
      <p>
        <strong>Speed:</strong> {data.positions[0].satelliteVelocity} km/s
      </p>
      <p>
        <strong>Latitude:</strong> {data.positions[0].satlatitude}
      </p>
      <p>
        <strong>Longitude:</strong> {data.positions[0].satlongitude}
      </p>
    </div>
  );
};

export default SatelliteDetails;

// The SatelliteDetails component is a functional component that displays details about a satellite. It takes a prop called data, which is an object containing information about the satellite. If the data is null, the component displays a message saying "No data available". If the data is not null, the component displays the name of the satellite, its speed, latitude, and longitude. The data is accessed using the data prop, which is destructured in the component's arguments.
