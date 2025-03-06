import Logo from '../../assets/icons/Logo.svg';
import burgerMenu from '../../assets/icons/burgerMenu.svg';
import imgHeader from '../../assets/images/imgHeader.png';
import imgHeader2 from '../../assets/images/imgHeader2.png';
import iconsPerson from '../../assets/images/iconsPerson.png';
import Exit from '../../assets/icons/Exit.svg';

type Props = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({isOpenMenu, setIsOpenMenu}) => {
  return (
    <header className="header">
      <div className='header__image'>
        <div className='header__image_container'>
          <img className='header__image_bg' src={imgHeader} alt='For header'/>
          <img className='header__image_bg2' src={imgHeader2} alt='For header'/>
        </div>
      </div>

      <div className="header__head">
        <img src={Logo} alt='Logo'/>

        <img
          src={isOpenMenu ? Exit : burgerMenu}
          alt='Burger menu'
          className='header__head_menu'
          onClick={() => setIsOpenMenu(prew => !prew)}
        />
      </div>

      <div className='header__content'>
        <div className='header__info '>
          <h1 className='header__info_title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>

          <p className='header__info_subtitle headline-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!
          </p>
        </div>

        <div className='header__wrapper'>
          <div className='header__icons'>
            <img className='header__icons_item' src={iconsPerson} alt='Icons person'/>

            <p className='header__icons_text headline-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>

          <button className='button__white'>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header;