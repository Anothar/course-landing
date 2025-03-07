import { useState } from 'react';
import student1 from '../../../assets/images/student1.png';
import student2 from '../../../assets/images/student2.jpg';
import student3 from '../../../assets/images/student3.jpg';
import student4 from '../../../assets/images/student4.png';
import student5 from '../../../assets/images/student5.png';
import student6 from '../../../assets/images/student6.png';
import student7 from '../../../assets/images/student7.png';
import student8 from '../../../assets/images/student8.png';
import student9 from '../../../assets/images/student9.png';
import student10 from '../../../assets/images/student10.png';
import student11 from '../../../assets/images/student11.png';
import student12 from '../../../assets/images/student12.png';
import { CardText } from '../../_shared/cardText';
import { studentCasesTexts } from '../../utils/consts';
import { Pagination } from '../../_shared/pagination';

const StudentCases = () => {
  const [activeStudent, setActiveStudent] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const photos = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10, student11, student12];

  return (
    <section className="section section-2">
      <h2 className="section__title section-2__title">Кейси учнів</h2>

      <div className="section-2__content">
          <article className="section-2__content_photos">
            {photos.map(photo => (
              <img
                className='section-2__content_photo'
                src={photo}
                alt='Spiker'
                style={{ transform: `translateX(-${activeStudent * 100}%)` }}
                key={photo}
              />
            ))}
          </article>

          <article className="section-2__content_info">
            <CardText items={studentCasesTexts[activeStudent]} numberItem={activeButton}/>

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

              <Pagination setActiveItem={setActiveStudent} maxNumber={11} activeNumber={activeStudent}/>
            </div>
          </article>
      </div>
    </section>
  )
}

export default StudentCases;
