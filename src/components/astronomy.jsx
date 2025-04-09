import '@justinribeiro/lite-youtube'
import { FaCopyright } from 'react-icons/fa'

function Astronomy({ json }) {
  let urlID = ''
  if (json.media_type !== 'image') urlID = json.url.split('v=')[1]

  return (
    <article className='astronomy'>
      <h3 className='astronomy__title'>{json.title}</h3>
      <section className='astronomy__media'>
        {json.media_type == 'image' ? <img src={json.hdurl} alt={json.title} /> : <lite-youtube videoid={urlID} />}
      </section>

      <p className='astronomy__text'>{json.explanation}</p>
      <section className='astronomy__footer'>
        <p>{json.date}</p>
        <p className='astronomy__footer-copyright'>
          <FaCopyright />
          {json.copyright}
        </p>
      </section>
    </article>
  )
}

export default Astronomy
