import { useState } from 'react';
import expert1 from '../../../assets/images/expert1.png';
import expert2 from '../../../assets/images/expert2.png';

const ExpertHub = () => {
  const [activeCareer, setActiveCareer] = useState(0);

  return (
    <section className="section section-4">
      <h2 className="section__title section-4__title">Експертна спільнота</h2>

      <div className="section-4__content section-4__content2">
          <div className='section-4__content_container'>
            <h3 className={'section-4__content_maintext ' + (activeCareer === 0 ? 'section-4__content_maintext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
              Центр карьеры
            </h3>
            <h3 className={'section-4__content_maintext ' + (activeCareer === 1 ? 'section-4__content_maintext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
              Центр карьеры
            </h3>
          </div>
          <div className='section-4__content_container'>
            <p className={'headline-2 section-4__content_subtext section-4__content_subtext2 ' + (activeCareer === 0 ? 'section-4__content_subtext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
              ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
            </p>
            <p className={'headline-2 section-4__content_subtext section-4__content_subtext2 ' + (activeCareer === 1 ? 'section-4__content_subtext-active' : '')} style={{ transform: `translateX(-${activeCareer * 100}%)` }}>
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
          <article className="section-4__content_images img2">
            <img
              src={expert1}
              alt='Expert'
              className={'section-4__content_image ' + (activeCareer === 0 ? 'section-4__content_image-active' : '')}
              style={{ transform: `translateX(-${activeCareer * 100}%)` }}
            />
            <img
              src={expert2}
              alt='Expert'
              className={'section-4__content_image ' + (activeCareer === 1 ? 'section-4__content_image-active' : '')}
              style={{ transform: `translateX(-${activeCareer * 100}%)` }}
            />
          </article>
      </div>
    </section>
  )
}

export default ExpertHub;
