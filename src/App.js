import React from 'react'
import './App.css'
import Addfood from './component/Addfood'
import Readfood from './component/Readfood'


export default function App() {
  return (
    <div className="App">
      <Addfood></Addfood>
    </div>
  )
}


// import React, { useState, useEffect } from "react";
// // import { Button, Input } from "@material-ui/core";
// // import { InputGroup, FormControl } from "react-bootstrap";
// import db from "./firebase";
// import "./App.css";
// import Deneme from "./Deneme";

// export default function App() {
//   const [info, setinfo] = useState([]);
//   const [malzeme1, setmalzeme1] = useState([]);
//   const [deger1, setdeger1] = useState([]);
//   const [malzeme2, setmalzeme2] = useState([]);
//   const [deger2, setdeger2] = useState([]);
//   const [malzeme3, setmalzeme3] = useState([]);
//   const [deger3, setdeger3] = useState([]);
//   useEffect(() => {
//     // var citiesRef = db.collection("cities");

//     // citiesRef.doc("SF").set({
//     //   name: "San Francisco",
//     //   state: "CA",
//     //   country: "USA",
//     //   capital: false,
//     //   population: 860000,
//     //   regions: ["west_coast", "norcal"],
//     // });
//   }, []);

//   const yemek = (e) => {
//     var citiesRef = db.collection("yemek");

//     citiesRef.doc(info).set({
//       1:[malzeme1,deger1],
//       2:[malzeme2,deger2],
//     });

//   };

//   return (
//     <div className="App">
//       <h1>YEMEK EKLE</h1>
//       <div>
//         <h3>yemek ismini giriniz</h3>
//         <div className="input">
//           <input value={info}  onChange={(e) => setinfo(e.target.value)}></input>
//           <br></br>
//           <h3>malzemeleri giriniz</h3>
//           <input value={malzeme1} onChange={(e) => setmalzeme1(e.target.value)}></input>
//           <input value={deger1} onChange={(e) => setdeger1(e.target.value)}></input>
//           <br></br>
//           <br></br>
//           <input value={malzeme2} onChange={(e) => setmalzeme2(e.target.value)}></input>
//           <input value={deger2} onChange={(e) => setdeger2(e.target.value)}></input>
//           <br></br>
//           <input value={malzeme3} onChange={(e) => setmalzeme3(e.target.value)}></input>
//           <input value={deger3} onChange={(e) => setdeger3(e.target.value)}></input>
//         </div>
//         <button onClick={yemek}>ekle</button>
//       </div>
//       <Deneme></Deneme>
//     </div>
//   );
// }
