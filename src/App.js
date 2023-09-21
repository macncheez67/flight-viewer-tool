import "./styles.css"
import Map from "./Map/Map";
import store from "./static";
import { useEffect, useState } from "react";
import L,{ map } from "leaflet";

export default function App() {
  const[flights, setFlights] = useState([])
  console.log(flights)
  const [coords, setCorrds] = useState({
    latitude: 32.897480,
    longitude: -97.040443
  });
  const[flag, setFlag] = useState(0);

  const[rem, setRem] = useState(0);

  //const [flights, setFlights] = useState({
    //set: store.flightsets
  //});

  const [display_name, setName] = useState("");

  function addFlights(flights){
    const tblElement1 = document.getElementById("flightrows1");
    if (tblElement1 !== null) {
    let flightsets = store();
    flightsets.forEach((flight) => {
      tblElement1.innerHTML +=  
      `<tr>
      <td>${flight.name}</td>
      <td>
        <input
          type="checkbox" 
          id=${flight.name} 
          name=${flight.name} 
          class ="selflight"
        />
      </td>
    </tr>`
    });
  }
  }

  const options = {
    enableHighAccuracy: true, 
    maximumAge: 30000,
    timeout: 27000
  };

 /* useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
}, []);*/
  function add(name){
    console.log("flag: " + flag)
    flights.push(name)
    setFlag(flag+1)
    console.log("Done and moving to map.jsx");
  }
  
  function remove(name){
    console.log("flag: " + flag)
    for(let i=0; i<flights.length; i++){
      if(flights[i] === name){
        const index = flights.indexOf(name);
        const tempflights = flights.splice(index, 1);
      }
    }
    setFlag(flag-1);
    console.log("Done and moving to map.jsx");
  }

  function submitHandler(e){
    const selected = document.getElementsByClassName("selflight")
    for(let i = 0; i<selected.length; i++){
      if(selected[i].checked && (flights.includes(selected[i].id)==false)){
        add(selected[i].id);
        console.log("1")
      }if(selected[i].checked ==false && flights.includes(selected[i].id)){
        remove(selected[i].id);
        console.log("2")
      }
    }
  };

  function buttonHandler(e){
    addFlights();
  };
  
  return (
    <html>
      <head>
        <script type ="text/javascript" src="addflights.js"></script>
      </head>
      <body>
    <div className="App">
      <h1>Flight Viewer Tool</h1>
      <section className="form-container">
        <form class="scrolly">
          <table>
          <tr>
            <th>Flights</th>
          </tr>
          </table>
          <table id = "flightrows1">
          </table>
        </form>
        <button onClick={(e) => buttonHandler(e)}>Load Flights</button>
        <button onClick={(e) => submitHandler(e)}>Submit</button>
      </section>
      <div id ="map">
      <Map coords={coords} display_name={display_name} flights = {flights}/>
      </div>
    </div>
    </body>
    </html>
  );
};

