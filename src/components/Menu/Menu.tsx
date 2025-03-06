import { useState } from 'react';
import Logo from '../../assets/icons/LogoMenu.svg';
import { ButtonMenu } from '../_shared/button';

type Props = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({isOpenMenu, setIsOpenMenu}) => {
  const [activeItem, setActiveItem] = useState('Home');
  const namesLink = ['Home', 'About us', 'Services', 'Portfolio', 'Blog', 'Pages', 'Contact us'];
  const handleClick = (text: string) => {
    setActiveItem(text);
    setIsOpenMenu(false);
  }

  return (
    <menu className={'menu ' + (isOpenMenu ? 'menu--open' : '')}>
      <nav className="nav">
        <img src={Logo} alt='Logo' className='nav__logo'/>

        <ul className='nav__content'>
          {namesLink.map((item) => (
            <li onClick={() => handleClick(item)} key={item}>
              <ButtonMenu isActive={activeItem === item} text={item}/>
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  )
};

export default Menu;