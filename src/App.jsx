import { Suspense, useEffect, useState } from "react";
// Services
import { getInformation } from "./services/getApiInformation";
import { KEY, urlApod } from "./services/constants";
// Component
import Header from "./components/container/header";
import Title from "./components/title";
import Astronomy from "./components/astronomy";
import Loading from "./components/loading";

function App() {
  const [astronomyInfo, setAstronomyInfo] = useState();

  const astronomyPictureOfTheDay = async () => {
    const info = await getInformation(urlApod, KEY);
    setAstronomyInfo(info);
  };

  useEffect(() => {
    astronomyPictureOfTheDay();
  }, []);

  return (
    <>
      <article className="bg-shadow">
        <main className="default-size">
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
      </article>
    </>
  );
}

export default App;
