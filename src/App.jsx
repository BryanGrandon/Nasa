import { Suspense, useEffect, useState } from "react";
// Services
import { getInformation } from "./services/getApiInformation";
import { KEY } from "./services/constants";
// Component
import Header from "./components/container/header";
import Title from "./components/title";
import Astronomy from "./components/astronomy";
import Loading from "./components/loading";

function App() {
  const [astronomyInfo, setAstronomyInfo] = useState();

  const astronomyPictureOfTheDay = async () => {
    const url = `https://api.nasa.gov/planetary/apod`;
    const info = await getInformation(url, KEY);
    setAstronomyInfo(info);
  };
  console.log(astronomyInfo);

  useEffect(() => {
    astronomyPictureOfTheDay();
  }, []);

  return (
    <>
      <main className="bg-shadow default-size">
        <Header />

        <article className="article">
          <Title text="Astronomy Picture of the Day" />

          {astronomyInfo !== undefined ? (
            <Astronomy json={astronomyInfo} />
          ) : (
            <Loading />
          )}
        </article>
      </main>
    </>
  );
}

export default App;
