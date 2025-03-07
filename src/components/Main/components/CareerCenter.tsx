import { useState } from 'react';
import career1 from '../../../assets/images/career1.png';
import career2 from '../../../assets/images/career2.png';

const CareerCenter = () => {
  const [activeCareer, setActiveCareer] = useState(0);

  return (
    <section className="section section-4">
      <h2 className="section__title section-4__title">Центр кар'єри</h2>

      <div className="section-4__content">
            <div className='section-4__content_container  disabled'>
              <h3 className={'section-4__content_maintext ' + (activeCareer === 0 ? 'section-4__content_maintext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
              Для взрослых
              </h3>
              <h3 className={'section-4__content_maintext ' + (activeCareer === 1 ? 'section-4__content_maintext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
                Для взрослых
              </h3>
            </div>
          <div className='section-4__content_container'>
            <p className={'headline-2 section-4__content_subtext ' + (activeCareer === 0 ? 'section-4__content_subtext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
              ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
            </p>
            <p className={'headline-2 section-4__content_subtext ' + (activeCareer === 1 ? 'section-4__content_subtext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
              ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
            </p>
          </div>
          <article className="section-4__content_buttons">
            <button className='button__whiteBorder headline-3' onClick={() => setActiveCareer(0)}>
              Востребованные профессии
            </button>
            <button className='button__whiteBorder headline-3' onClick={() => setActiveCareer(1)}>
              Практика на реальных задачах
            </button>
          </article>
          <article className="section-4__content_images">
            <img
              src={career1}
              alt='Career'
              className={'section-4__content_image ' + (activeCareer === 0 ? 'section-4__content_image-active' : '')}
              style={{ transform: `translateX(-${activeCareer * 100}%)` }}
            />
            <img
              src={career2}
              alt='Career'
              className={'section-4__content_image image2 ' + (activeCareer === 1 ? 'section-4__content_image-active' : '')}
              style={{ transform: `translateX(-${activeCareer * 100}%)` }}
            />
          </article>
      </div>
    </section>
  )
}

export default CareerCenter;
