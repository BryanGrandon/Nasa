import { useEffect, useState } from "react";
import Header from "./components/container/header";

const getInfo = async (url) => {
  const key = "rLuQUBaLDvtQsOIoc3wlCUliy6vOLaxzdbKXpyig";
  const result = await fetch(url + `?api_key=${key}`);
  const data = await result.json();
  return data;
};

function App() {
  const [info, setInfo] = useState();

  const astronomy = async () => {
    const url = `https://api.nasa.gov/planetary/apod`;
    const info = await getInfo(url);
    setInfo(info);
  };
  console.log(info);

  useEffect(() => {
    astronomy();
  }, []);

  return (
    <>
      <main className="bg-shadow default-size">
        <Header />
        <h1>Astronomy Picture of the Day</h1>
        {info !== undefined ? <h2>{info.title}</h2> : null}
        {/* {info !== undefined ? <img src={info.hdurl} alt="" /> : null} */}
        {info !== undefined ? <p>{info.explanation}</p> : null}
      </main>
    </>
  );
}

export default App;
