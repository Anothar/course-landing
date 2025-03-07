import { useState } from 'react';
import spiker from '../../../assets/images/spiker.png';
import spiker2 from '../../../assets/images/spiker2.jpg';
import spiker3 from '../../../assets/images/spiker3.jpg';
import { CardText } from '../../_shared/cardText';
import { courseSkiperTexts } from '../../utils/consts';
import { Pagination } from '../../_shared/pagination';

const CourseSpeakers = () => {
  const [activeSpiker, setActiveSpiker] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <section className="section section-2">
      <h2 className="section__title section-2__title">Спікери курсу</h2>

      <div className="section-2__content">
        <article className="section-2__content_photos">
          <img
            className='section-2__content_photo'
            src={spiker}
            alt='Spiker'
            style={{ transform: `translateX(-${activeSpiker * 100}%) scaleX(-1)` }}
          />

          <img
            className='section-2__content_photo'
            src={spiker2}
            alt='Spiker'
            style={{ transform: `translateX(-${activeSpiker * 100}%)` }}
          />

          <img
            className='section-2__content_photo'
            src={spiker3}
            alt='Spiker'
            style={{ transform: `translateX(-${activeSpiker * 100}%)` }}
          />
        </article>

        <article className="section-2__content_info">
          <CardText items={courseSkiperTexts[activeSpiker]} numberItem={activeButton}/>

          <div className='section-2__buttons'>
            <div className='section-2__buttons_first'>
              <button
                className={'headline-4 button__ceck ' + (activeButton === 0 ? 'button__ceck-active' : '')}
                onClick={() => setActiveButton(0)}
              >
                Web Development
              </button>
              <button
                className={'headline-4 button__ceck ' + (activeButton === 1 ? 'button__ceck-active' : '')}
                onClick={() => setActiveButton(1)}
              >
                Digital Marketing
              </button>
              <button
                className={'headline-4 button__ceck ' + (activeButton === 2 ? 'button__ceck-active' : '')}
                onClick={() => setActiveButton(2)}
              >
                SaaS Products
              </button>
            </div>

            <div className='section-2__buttons_first'>
              <button
                className={'headline-4 button__ceck ' + (activeButton === 3 ? 'button__ceck-active' : '')}
                onClick={() => setActiveButton(3)}
              >
                Apps Development
              </button>
              <button
                className={'headline-4 button__ceck ' + (activeButton === 4 ? 'button__ceck-active' : '')}
                onClick={() => setActiveButton(4)}
              >
                SEO Services
              </button>
              <button
                className={'headline-4 button__ceck ' + (activeButton === 5 ? 'button__ceck-active' : '')}
                onClick={() => setActiveButton(5)}
              >
                Data Analysis
              </button>
            </div>

            <Pagination setActiveItem={setActiveSpiker} maxNumber={2} activeNumber={activeSpiker}/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CourseSpeakers;
