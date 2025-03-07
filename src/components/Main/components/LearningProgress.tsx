import { useState } from 'react';
import learning1 from '../../../assets/images/learning1.png';
import learning2 from '../../../assets/images/learning2.png';
import learning3 from '../../../assets/images/learning3.png';
import learning4 from '../../../assets/images/learning4.png';
import playCircle from '../../../assets/icons/playCircle.svg';
import { Pagination } from '../../_shared/pagination';

const LearningProgress = () => {
  const [activeLearning, setActiveLearning] = useState(0);

  return (
    <section className="section section-3">
      <h2 className="section__title section-3__title">Як проходить навчання</h2>

      <div className="section-3__content">
        <div className='first_block'>
          <article className="section-3__content_photos">
            <img
              className={'section-3__content_photo ' + (activeLearning === 0 ? 'section-3__content_photo-active' : '')}
              src={learning1}
              alt='Video'
              style={{ transform: `translateX(-${activeLearning * 100}%)` }}
            />
            <img
              className={'section-3__content_photo ' + (activeLearning === 1 ? 'section-3__content_photo-active' : '')}
              src={learning2}
              alt='Video'
              style={{ transform: `translateX(-${activeLearning * 100}%)` }}
            />
            <img
              className={'section-3__content_photo ' + (activeLearning === 2 ? 'section-3__content_photo-active' : '')}
              src={learning3}
              alt='Video'
              style={{ transform: `translateX(-${activeLearning * 100}%)` }}
            />
            <img
              className={'section-3__content_photo ' + (activeLearning === 3 ? 'section-3__content_photo-active' : '')}
              src={learning4}
              alt='Video'
              style={{ transform: `translateX(-${activeLearning * 100}%)` }}
            />
          </article>
          <button className='button__video headline-7'>
            <img src={playCircle} alt='Play circle'/>
            Смотреть видео
          </button>
        </div>

        <article className="section-3__content_info">
          <div className='section-3__content_container'>
            <div className='section-3__content_text' style={{ transform: `translateX(-${activeLearning * 100}%)` }}>
              <h3 className='h3BigDesk'>Знакомитесь с платформой</h3>
              <p className='headline-6'>Lorem ipsum dolor sit amet consectetur. Felis amet consectetur sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla mi at. Turpis volutpat parturient elit blandit proin magna pretium vestibulum elit. A massa adipiscing pellentesque tempor ac vel.</p>
            </div>

            <div className='section-3__content_text' style={{ transform: `translateX(-${activeLearning * 100}%)` }}>
              <h3 className='h3BigDesk'>Знакомитесь с платформой</h3>
              <p className='headline-6'>Lorem ipsum dolor sit amet consectetur. Felis amet consectetur sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla mi at. Turpis volutpat parturient elit blandit proin magna pretium vestibulum elit. A massa adipiscing pellentesque tempor ac vel.</p>
            </div>

            <div className='section-3__content_text' style={{ transform: `translateX(-${activeLearning * 100}%)` }}>
              <h3 className='h3BigDesk'>Знакомитесь с платформой</h3>
              <p className='headline-6'>Lorem ipsum dolor sit amet consectetur. Felis amet consectetur sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla mi at. Turpis volutpat parturient elit blandit proin magna pretium vestibulum elit. A massa adipiscing pellentesque tempor ac vel.</p>
            </div>

            <div className='section-3__content_text' style={{ transform: `translateX(-${activeLearning * 100}%)` }}>
              <h3 className='h3BigDesk'>Знакомитесь с платформой</h3>
              <p className='headline-6'>Lorem ipsum dolor sit amet consectetur. Felis amet consectetur sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla mi at. Turpis volutpat parturient elit blandit proin magna pretium vestibulum elit. A massa adipiscing pellentesque tempor ac vel.</p>
            </div>
          </div>

          <Pagination setActiveItem={setActiveLearning} maxNumber={3} activeNumber={activeLearning}/>
        </article>
      </div>
    </section>
  )
}

export default LearningProgress;
