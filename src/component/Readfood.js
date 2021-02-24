import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import db from "./firebase";

export default function Readfood() {
  const [yemek, setYemek] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    db.collection("yemek")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            setYemek(doc.id)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }, []);
  return (
    <div>
      <Card>
        <h1>asdasd{console.log(yemek)} </h1>
        <button>tikla</button>
        
      </Card>
    </div>
  );
}
// db.collection("yemek")
//       .get()
//       .then( function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//           // doc.data() is never undefined for query doc snapshot

//         });
//       });
