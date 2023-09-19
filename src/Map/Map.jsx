import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import icon from "../Images/icon.png";
import store from "../static";
import L, { map } from "leaflet";

export default function Map({ coords, display_name, flights}) {
  const { latitude, longitude } = coords;
  let flightsets = store();
  const customIcon = new L.Icon({//creating a custom icon to use in Marker
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30]
  });

  function MapView() {
    let map = useMap();

    map.setView([latitude, longitude], map.getZoom());
    for(let i=0; i<flights.length; i++){
      for(let j=0; j<flightsets.length; j++){
        if(flightsets[j].name === flights[i]){
          console.log("Test");
          L.polyline(flightsets[j].cds, {color: 'red'}).addTo(map);
        }
      }
    }

    //sets AAL1612 (arrival)
    //L.polyline([
     // [32.914055, -97.058468],
      //[32.902286, -97.058468]
    //]).addTo(map);
     //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    <div id = "map">
    <MapContainer
      classsName="map"
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[latitude, longitude]}>
        <Popup>{display_name}</Popup>
      </Marker>
      <MapView />
    </MapContainer>
    </div>
  );
}