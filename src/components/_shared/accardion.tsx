import arrowLeft from '../../assets/icons/arrowCircleLeft.svg';
import arrowRight from '../../assets/icons/arrowCircleRight.svg';
import addCirvle from '../../assets/icons/addCircle.svg';
import { useState } from 'react';

type Props = {
  activePage: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export const Accardion: React.FC<Props> = ({ activePage, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLeftClick = () => {
    setActive(prev => {
      if (prev === 0) {
        return 7;
      } else {
        return prev - 1;
      }
    })
  };

  const handleRightClick = () => {
    setActive(prev => {
      if (prev === 7) {
        return 0;
      } else {
        return prev + 1;
      }
    })
  };

  return (
    <div className="accardion">
      <div className="accardion__main">
        <div className="accardion__main_block">
          <p className="headline-8">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div className="accardion__main_nav">
          <div className={"accardion__main_nav-left " + (isOpen ? 'accardion__main_nav-left-active' : '')}></div>

          <div className="accardion__main_nav-page">{activePage + 1}</div>

          <div className="accardion__main_nav-menu">
            <img src={arrowLeft} alt='Course left' onClick={handleLeftClick}/>

            <img src={addCirvle} alt='Course Open' onClick={() => setIsOpen(prev => !prev)}/>

            <img src={arrowRight} alt='Course Right' onClick={handleRightClick}/>
          </div>

          <div className="accardion__main_nav-maxpage">8</div>

          <div className={"accardion__main_nav-right " + (isOpen ? 'accardion__main_nav-right-active' : '')}></div>
        </div>

        <div className={'accardion__content ' + (isOpen ? 'accardion__content-active' : '')}>
          <div className="accardion__content_block">
            <h5>Модуль 1: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 2: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 3: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 4: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 5: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 6: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 7: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className="accardion__content_block">
            <h5>Модуль 8: Фундамент</h5>
            <p className="headline-3">Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги</p>
            <div className='headline-9 '>Что будем изучать и делать:</div>
            <div className='accardion__content_buttons'>
              <div className='accardion__content_button headline-10'>
                Apps Development
              </div>
              <div className='accardion__content_button headline-10'>
                SEO Services
              </div>
              <div className='accardion__content_button headline-10'>
                Data Analysis
              </div>
            </div>
          </div>

          <div className='accardion__blackBlock'>
            <div className='accardion__leftMask'>
              <div className='accardion__blockmask'></div>
            </div>
            <div className='accardion__rightMask'>
              <div className='accardion__blockmask'></div>
            </div>
          </div>

          <div className='accardion__content_exit headline-11' onClick={() => setIsOpen(false)}>
            Згорнути
          </div>
        </div>
      </div>
    </div>
  )
};
