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
            <a href='mailo:example@support.com'>example@support.com</a>
          </p>
          <p className='headline-18'>
            <img src={map} alt='map' className='img'/>
            <a href="https://www.google.com/maps/search/5+xyz+st.,+adc,+vallhalla/@49.4081934,26.9527239,4533m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D">
              5 xyz st., adc, vallhalla
            </a>
          </p>
        </div>
        <div className='secondBlock'>
          <p className='headline-25'>
            <a href=''>
              Terms of Use
            </a>
          </p>
          <p className='headline-25'>
            <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>

      <p className='headline-25'>© 2024 Created by: Martin</p>
    </footer>
  )
}

export default Footer;
