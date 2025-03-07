import { useState } from 'react';
import left from '../../../assets/icons/VectorLeft.svg';
import right from '../../../assets/icons/VectorRight.svg';

const Raview = () => {
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

  const variables = [
    [
      { x: 340, y: 0 },
      { x: 87, y: 29 },
      { x: -428, y: 29 },
    ],
    [
      { x: 252, y: 29 },
      { x: 0, y: 0 },
      { x: -253, y: 29 },
    ],
    [
      { x: 428, y: 29 },
      { x: -88, y: 29 },
      { x: -340, y: 0 },
    ],
  ]

  return (
    <section className='section-6' style={{ position: 'relative' }}>
      <h2 className="section__title section-5__title">Відгуки</h2>

      <div className='section-5__content_circles'>
        <div className={'item ' + (activeCourse === 0 ? 'active' : 'disabled')} onClick={() => setActiveCourse(0)}/>
        <div className={'item ' + (activeCourse === 1 ? 'active' : 'disabled')} onClick={() => setActiveCourse(1)}/>
        <div className={'item ' + (activeCourse === 2 ? 'active' : 'disabled')} onClick={() => setActiveCourse(2)}/>
      </div>

      <article className="section-5__content section-6__content">
        <img className='section-5__content_left' src={left} alt='To left' onClick={handleLeftClick}/>
        <img className='section-5__content_right' src={right} alt='To right' onClick={handleRightClick}/>

        <div
          className={'section-6__element ' + (activeCourse === 0 ? 'active' : '')}
          style={{
            transform: `translate(${variables[activeCourse][0].x}px, ${variables[activeCourse][0].y}px)`,
          }}
        >
          <div className='info'>
            <p className='headline-18'>ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.</p>
            <div>
              <p className='headline-19'>
                Fairouz Mhmd
              </p>
              <p className='headline-20 '>
                Manager
              </p>
            </div>
          </div>
        </div>

        <div 
          className={'section-6__element ' + (activeCourse === 1 ? 'active' : '')}
          style={{
            transform: `translate(${variables[activeCourse][1].x}px, ${variables[activeCourse][1].y}px)`,
          }}
        >
          <div className='info'>
            <p className='headline-18'>ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.</p>
            <div>
              <p className='headline-19'>
                Yusuf Amin
              </p>
              <p className='headline-20 '>
                Founder
              </p>
            </div>
          </div>
        </div>

        <div 
          className={'section-6__element ' + (activeCourse === 2 ? 'active' : '')}
          style={{
            transform: `translate(${variables[activeCourse][2].x}px, ${variables[activeCourse][2].y}px)`,
          }}
        >
          <div className='info'>
            <p className='headline-18'>ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.</p>
            <div>
              <p className='headline-19'>
                Fouad Osman
              </p>
              <p className='headline-20 '>
                Officer
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Raview;
