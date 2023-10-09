
import './App.css'
import { useState, useEffect } from 'react';
import axios from "axios"
import Figure from "./components/Figure/Figure"

const App = () => {
 //Recuperamos la fecha actual en un formato ISO -> 2022-01-01
const today = new Date(Date.now()).toISOString().slice(0, 10);

const [apod, setApod] = useState({});

const [date, setDate] = useState(today);

const NASA_URL = "https://api.nasa.gov/";

const NASA_API_KEY = "EXjVxXTVRZtQYufQwf5FYdZyxEpDiuVTLuuM8HnO";

useEffect(() => {
  const getApod = async () => {
  const data = await axios.get(
  `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
  );
  setApod(data.data);
  };
  getApod();
  }, [date]);

  const handleInput = (ev) => {
  setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <div className='contair'>
        <img src={"https://static.vecteezy.com/system/resources/previews/022/424/490/original/nasa-logo-editorial-free-vector.jpg"} className="logo" alt="NASA LOGO"/>
        <h2 className="title">
        NASA API </h2>      
      </div>
<h1>Imagen astronómica del día</h1>
<input type="date" id="photo-date" onChange={handleInput} />
{date > today ? (
  <h2>Por favor elige una fecha anterior</h2>
  ) : (
    <Figure data={apod} />

  )}
  <div className="stanrd-dialog center">
    <h1 className="dialog-text">@eiroa007 - 2023 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>

  </div>
    </div>
  )
};

export default App;
