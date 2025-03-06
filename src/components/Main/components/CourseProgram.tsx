import { useState } from 'react';
import course1 from '../../../assets/images/course1.jpg';
import course2 from '../../../assets/images/course2.png';
import course3 from '../../../assets/images/course3.png';
import course4 from '../../../assets/images/course4.png';
import course5 from '../../../assets/images/course5.png';
import course6 from '../../../assets/images/course6.png';
import course7 from '../../../assets/images/course7.png';
import course8 from '../../../assets/images/course8.png';
import { CardText } from '../../_shared/cardText';
import { studentCasesTexts } from '../../utils/consts';
import { Accardion } from '../../_shared/accardion';

const CourseProgram = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeCourse, setActiveCourse] = useState(0);

  const photos = [course1, course2, course3, course4, course5, course6, course7, course8];


  return (
    <section className="section">
      <h2 className="section__title section-2__title">Програма курсу</h2>

      <div className="section-2__content">
          <article className="section-2__content_photos">
            {photos.map(photo => (
              <img
                className='section-2__content_photo'
                src={photo}
                alt='Course'
                style={{ transform: `translateX(-${activeCourse * 100}%) scaleX(-1)` }}
                key={photo}
              />
            ))}
          </article>

          <article className="section-2__content_info">
            <CardText items={studentCasesTexts[activeCourse]} numberItem={activeButton} />

            <Accardion activePage={activeCourse} setActive={setActiveCourse}/>

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

              <div className='section-2__buttons_first' style={{ margin: 0 }}>
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
            </div>
          </article>
      </div>
    </section>
  )
}

export default CourseProgram;
