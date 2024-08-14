import { FaCopyright } from "react-icons/fa";

function Astronomy({ json }) {
  return (
    <article className="astronomy">
      <h3 className="astronomy__title">{json.title}</h3>

      {json.media_type == "image" ? (
        <img src={json.hdurl} alt={json.title} className="astronomy__media" />
      ) : (
        <video controls src={json.url} className="astronomy__media" />
      )}
      <p className="astronomy__text">{json.explanation}</p>
      <section className="astronomy__footer">
        <p>{json.date}</p>
        <p className="astronomy__footer-copyright">
          <FaCopyright />
          {json.copyright}
        </p>
      </section>
    </article>
  );
}

export default Astronomy;
