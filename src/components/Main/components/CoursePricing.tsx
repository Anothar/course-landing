import { useState } from 'react';
import left from '../../../assets/icons/VectorLeft.svg';
import right from '../../../assets/icons/VectorRight.svg';

const CoursePricing = () => {
  const [activeCourse, setActiveCourse] = useState(1);

  const handleLeftClick = () => {
    setActiveCourse(prev => {
      if (prev === 0) {
        return 2;
      } else {
        return prev - 1;
      }
    })
  };

  const handleRightClick = () => {
    setActiveCourse(prev => {
      if (prev === 2) {
        return 0;
      } else {
        return prev + 1;
      }
    })
  };

  return (
    <section style={{ position: 'relative' }}>
      <h2 className="section__title section-5__title">Тарифи навчання</h2>

      <div className='section-5__content_circles'>
        <div className={'item ' + (activeCourse === 0 ? 'active' : '')} onClick={() => setActiveCourse(0)}/>
        <div className={'item ' + (activeCourse === 1 ? 'active' : '')} onClick={() => setActiveCourse(1)}/>
        <div className={'item ' + (activeCourse === 2 ? 'active' : '')} onClick={() => setActiveCourse(2)}/>
      </div>

      <article className="section-5__content">
        <img className='section-5__content_left' src={left} alt='To left' onClick={handleLeftClick}/>
        <img className='section-5__content_right' src={right} alt='To right' onClick={handleRightClick}/>

        <div className={'section-5__content_info ' + (activeCourse === 0 ? 'section-5__content_info-active' : '')} style={{ transform: `translateX(${(activeCourse - 1) * -100}%)  ${activeCourse === 0 ? 'scale(1)' : 'scale(0.95)'}` }}>
          <h4 className={'headline-12 h4 ' + (activeCourse === 0 ? 'active' : '')}>Колеги</h4>

          <p className={'headline-13 p1 ' + (activeCourse === 0 ? 'active' : '')}>Діє при оплаті навчання групи з трьох осіб</p>

          <div className='section-5__content-price'>
            <div className='prices'>
              <p className='headline-14 p2'>9 модулів за 6 тижнів</p>

              <div className={'cost ' + (activeCourse === 0 ? 'active' : '')}>
                <p className='headline-15'>3 329</p>

                <p className='headline-16'>/місяць</p>
              </div>

              <div className={'discount ' + (activeCourse === 0 ? 'active' : '')}>
                <p className='headline-16'>3 329</p>

                <p className='headline-16'>на 24 місяць</p>
              </div>
            </div>

            <div className='prices2'>
              <p className='headline-14 p2'>Одним платежом</p>

              <div className={'cost ' + (activeCourse === 0 ? 'active' : '')}>
                <p className='headline-17'>75 900</p>

                <p className='headline-16'>-5%</p>
              </div>

              <div className={'discount ' + (activeCourse === 0 ? 'active' : '')}>
                <p className='headline-16'>79 900</p>
              </div>
            </div>
          </div>

          <div className='line'/>

          <ul className={'list ' + (activeCourse === 0 ? 'active' : '')}>
            <li className='headline-18'>9 модулів за 6 тижнів</li>
            <li className='headline-18'>Вебінари з експертами</li>
            <li className='headline-18'>Практичні завдання</li>
            <li className='headline-18'>Посвідчення про підвищення кваліфікації за підсумками навчання</li>
            <li className='headline-18'>Безстроковий доступ до матеріалів</li>
            <li className='headline-18'>Груповий чат з експертами та координаторами курсу</li>
            <li className='headline-18'>Професійне ком'юніті</li>
          </ul>

          <button className={'button__grey ' + (activeCourse === 0 ? 'active' : '')}>
            Вибрати
          </button>
        </div>

        <div className={'section-5__content_info ' + (activeCourse === 1 ? 'section-5__content_info-active' : '')} style={{ transform: `translateX(${(activeCourse - 1) * -100}%)  ${activeCourse === 1 ? 'scale(1)' : 'scale(0.95)'}` }}>
          <h4 className={'headline-12 h4 ' + (activeCourse === 1 ? 'active' : '')}>Колеги</h4>

          <p className={'headline-13 p1 ' + (activeCourse === 1 ? 'active' : '')}>Діє при оплаті навчання групи з трьох осіб</p>

          <div className='section-5__content-price'>
            <div className='prices'>
              <p className='headline-14 p2'>9 модулів за 6 тижнів</p>

              <div className={'cost ' + (activeCourse === 1 ? 'active' : '')}>
                <p className='headline-15'>3 329</p>

                <p className='headline-16'>/місяць</p>
              </div>

              <div className={'discount ' + (activeCourse === 1 ? 'active' : '')}>
                <p className='headline-16'>3 329</p>

                <p className='headline-16'>на 24 місяць</p>
              </div>
            </div>

            <div className='prices2'>
              <p className='headline-14 p2'>Одним платежом</p>

              <div className={'cost ' + (activeCourse === 1 ? 'active' : '')}>
                <p className='headline-17'>75 900</p>

                <p className='headline-16'>-5%</p>
              </div>

              <div className={'discount ' + (activeCourse === 1 ? 'active' : '')}>
                <p className='headline-16'>79 900</p>
              </div>
            </div>
          </div>

          <div className='line'/>

          <ul className={'list ' + (activeCourse === 1 ? 'active' : '')}>
            <li className='headline-18'>9 модулів за 6 тижнів</li>
            <li className='headline-18'>Вебінари з експертами</li>
            <li className='headline-18'>Практичні завдання</li>
            <li className='headline-18'>Посвідчення про підвищення кваліфікації за підсумками навчання</li>
            <li className='headline-18'>Безстроковий доступ до матеріалів</li>
            <li className='headline-18'>Груповий чат з експертами та координаторами курсу</li>
            <li className='headline-18'>Професійне ком'юніті</li>
          </ul>

          <button className={'button__grey ' + (activeCourse === 1 ? 'active' : '')}>
            Вибрати
          </button>
        </div>

        <div className={'section-5__content_info ' + (activeCourse === 2 ? 'section-5__content_info-active' : '')} style={{ transform: `translateX(${(activeCourse - 1) * -100}%)  ${activeCourse === 2 ? 'scale(1)' : 'scale(0.95)'}` }}>
          <h4 className={'headline-12 h4 ' + (activeCourse === 2 ? 'active' : '')}>Колеги</h4>

          <p className={'headline-13 p1 ' + (activeCourse === 2 ? 'active' : '')}>Діє при оплаті навчання групи з трьох осіб</p>

          <div className='section-5__content-price'>
            <div className='prices'>
              <p className='headline-14 p2'>9 модулів за 6 тижнів</p>

              <div className={'cost ' + (activeCourse === 2 ? 'active' : '')}>
                <p className='headline-15'>3 329</p>

                <p className='headline-16'>/місяць</p>
              </div>

              <div className={'discount ' + (activeCourse === 2 ? 'active' : '')}>
                <p className='headline-16'>3 329</p>

                <p className='headline-16'>на 24 місяць</p>
              </div>
            </div>

            <div className='prices2'>
              <p className='headline-14 p2'>Одним платежом</p>

              <div className={'cost ' + (activeCourse === 2 ? 'active' : '')}>
                <p className='headline-17'>75 900</p>

                <p className='headline-16'>-5%</p>
              </div>

              <div className={'discount ' + (activeCourse === 2 ? 'active' : '')}>
                <p className='headline-16'>79 900</p>
              </div>
            </div>
          </div>

          <div className='line'/>

          <ul className={'list ' + (activeCourse === 2 ? 'active' : '')}>
            <li className='headline-18'>9 модулів за 6 тижнів</li>
            <li className='headline-18'>Вебінари з експертами</li>
            <li className='headline-18'>Практичні завдання</li>
            <li className='headline-18'>Посвідчення про підвищення кваліфікації за підсумками навчання</li>
            <li className='headline-18'>Безстроковий доступ до матеріалів</li>
            <li className='headline-18'>Груповий чат з експертами та координаторами курсу</li>
            <li className='headline-18'>Професійне ком'юніті</li>
          </ul>

          <button className={'button__grey ' + (activeCourse === 2 ? 'active' : '')}>
            Вибрати
          </button>
        </div>
      </article>
    </section>
  )
}

export default CoursePricing;
