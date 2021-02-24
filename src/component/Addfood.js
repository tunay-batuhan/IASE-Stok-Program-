import React, { useEffect, useState } from "react";
import { Card, Container } from "@material-ui/core";
import "./Addfood.css";
import db from "./firebase";

export default function App() {
  const [yemek, setYemek] = useState([]);
  const [malzeme1, setmalzeme1] = useState([]);
  const [deger1, setdeger1] = useState("gram");
  const [malzeme2, setmalzeme2] = useState([]);
  const [deger2, setdeger2] = useState("gram");
  const [malzeme3, setmalzeme3] = useState([]);
  const [deger3, setdeger3] = useState("gram");
  const [malzeme4, setmalzeme4] = useState([]);
  const [deger4, setdeger4] = useState("gram");
  const [miktar1, setmiktar1] = useState("");
  const [miktar2, setmiktar2] = useState("");
  const [miktar3, setmiktar3] = useState("");
  const [miktar4, setmiktar4] = useState("");

  const addfood = () => {
    setYemek(yemek);
    setmalzeme1(malzeme1);setdeger1(deger1); 
    setmalzeme2(malzeme2);setdeger1(deger2);
    setmalzeme2(malzeme3);setdeger1(deger3);
    setmalzeme2(malzeme4);setdeger1(deger4);
    setmiktar1(miktar1)
    setmiktar1(miktar2)
    setmiktar1(miktar3)
    setmiktar1(miktar4)
    var yemeklist = db.collection("yemek");

    yemeklist.doc(yemek).set({
      0: [malzeme1,miktar1, deger1],
      1: [malzeme2,miktar2, deger2],
      2: [malzeme3,miktar3, deger3],
      3: [malzeme4,miktar4, deger4],
    });
  };

  return (
    <Container>
      <Card className="bsk">
        <h3 style={{ textAlign: "center" }}>Yemek tarifi ekle</h3>
        <div>
          <input
            className="Inp" value={yemek}
            placeholder="Yemek İsmi"
            onChange={(e) => setYemek(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Malzeme İsmi"
            className="Inp"
            onChange={(e) => setmalzeme1(e.target.value)}
          ></input>
          <input  placeholder="Miktar" className="Inpn" onChange={(e) => setmiktar1(e.target.value)}></input>
          <select className="slct" onChange={(e) => setdeger1(e.target.value)}>
            <option value="gr">gram</option>
            <option value="lt">litre</option>
            <option value="kg">kilogram</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Malzeme İsmi"
            className="Inp"
            onChange={(e) => setmalzeme2(e.target.value)}
          ></input>
          <input className="Inpn" onChange={(e) => setmiktar2(e.target.value)}></input>
          <select className="slct" onChange={(e) => setdeger2(e.target.value)}>
            <option value="gr">gram</option>
            <option value="lt">litre</option>
            <option value="kg">kilogram</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Malzeme İsmi"
            className="Inp"
            onChange={(e) => setmalzeme3(e.target.value)}
          ></input>
          <input className="Inpn" onChange={(e) => setmiktar3(e.target.value)}></input>
          <select className="slct" onChange={(e) => setdeger3(e.target.value)}>
            <option value="gr">gram</option>
            <option value="lt">litre</option>
            <option value="kg">kilogram</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Malzeme İsmi"
            className="Inp"
            onChange={(e) => setmalzeme4(e.target.value)}
          ></input>
          <input className="Inpn" onChange={(e) => setmiktar4(e.target.value)}></input>
          <select className="slct" onChange={(e) => setdeger4(e.target.value)}>
            <option value="gr">gram</option>
            <option value="lt">litre</option>
            <option value="kg">kilogram</option>
          </select>
        </div>
        <button className="btn" onClick={addfood}>
            Kaydet
        </button>
      </Card>
    </Container>
  );
}
