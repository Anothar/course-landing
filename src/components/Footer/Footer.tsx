import logo from '../../assets/icons/Logo.svg';
import map from '../../assets/icons/Map.svg';
import email from '../../assets/icons/Email.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='Logo' className='logo'/>
      <p className='headline-18'>
        Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Voluptatibus facere
      </p>

      <div className='content'>
        <div className='firstBlock'>
          <p className='headline-24'>Contact Information</p>
          <p className='headline-18 p1'>
            <img src={email} alt='email' className='img'/>
            example@support.com
          </p>
          <p className='headline-18'>
            <img src={map} alt='map' className='img'/>
            5 xyz st., adc, vallhalla
          </p>
        </div>
        <div className='secondBlock'>
          <p className='headline-25'>Terms of Use</p>
          <p className='headline-25'>Privacy Policy</p>
        </div>
      </div>

      <p className='headline-25'>© 2024 Created by: Martin</p>
    </footer>
  )
}

export default Footer;
