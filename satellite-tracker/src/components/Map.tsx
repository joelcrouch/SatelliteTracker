import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  lat: number;
  lon: number;
}

const Map: React.FC<MapProps> = ({ lat, lon }) => {
  if (!lat || !lon) return <p>Map not available</p>;

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
};

export default Map;

// The Map component is a functional component that displays a map with a marker at a specific latitude and longitude. It takes two props, lat and lon, which represent the latitude and longitude of the marker. If either of these props is missing, the component displays a message saying "Map not available". If both props are present, the component renders a MapContainer from the react-leaflet library, with a TileLayer for the map tiles and a Marker at the specified latitude and longitude. The center of the map is set to the specified latitude and longitude, and the zoom level is set to 5. The style prop is used to set the height and width of the map.
