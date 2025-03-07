import imgHeader2 from '../../../assets/images/imgHeader2.png';
import imgHeader from '../../../assets/images/imgHeader.png';

const Form = () => {
  return (
    <section className="section section-7">
      <h2 className="section__title section-7__title">Як проходить навчання</h2>

      <article className="section-7__content">
        <div className='first'>
          <h3 className="headline-21">Є питання?</h3>
          <h3 className="headline-21">Зв’яжіться з нами!</h3>
          <p className="headline-22">Наша команда готова допомогти вам з будь-якими питаннями, які у вас можуть виникнути. Просто заповніть форму нижче і ми з вами зв’яжемось протягом 24 годин.</p>
        </div>

        <form>
          <div className="inputs">
            <input placeholder="Ваше ім’я*" name="name" type="text" className="headline-3"/>
            <input placeholder="Ваш email*" name="email" type="email" className="headline-3"/>
            <input placeholder="Ваш номер телефону*" name="phone" type="number" className="headline-3"/>
          </div>

          <p className="headline-3">
            Залишаючи свої дані, я погоджуюся на обробку персональних даних відповідно до <span>Політики конфіденційності</span>
          </p>

          <button type="submit" className="button__black headline-23">
            ВІДПРАВИТИ
          </button>
        </form>

        <img src={imgHeader2} alt='Bacground' className='bg'/>
        <img src={imgHeader} alt='Bacground2' className='bg2'/>
      </article>
    </section>
  )
}

export default Form;
