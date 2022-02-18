import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const contact= function() {

  function sendEmail(e) {

    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }

  return (
  <div>
  <GlobalStyles />

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1>Contáctanos</h1>
              <p>EMBAJADORES DEL CAFÉ COLOMBIANO EN EL MUNDO. Servimos café colombiano en más de 23.000 tiendas - 66 países.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

      <section className='container'>
        <div className='row'>
          
          <div className='col-lg-8 mb-3'>
          <h3>¿Tienes preguntas?</h3>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <input type="text" className="form-control" name="user_name" placeholder="Tu nombre" required />
                <input type="email" className="form-control" name="user_email" placeholder="Tu email" required />
                <input type="text" className="form-control" name="user_phone" placeholder="Tu telefono" required />
                <textarea name="message" className="form-control" placeholder="Tu mensaje" required />
                <div id='success' className='hide'>Tu mensaje se ha enviado</div>
                <div id='failed' className='hide'>Tu mensaje no se ha enviado</div>
                <input type='submit' id='buttonsent' value='Enviar' className="btn btn-main color-2" />
              </form>
            </div>
          </div>

          <div className='col-md-4'>
           
           <div className="padding40 box-rounded mb30">
              <h3>Oficina en Colombia</h3>
              <address className="s1">
                <span><i className="id-color fa fa-map-marker fa-lg"></i>Bogotá</span>
                <span><i className="id-color fa fa-phone fa-lg"></i>+57 316 237 2839</span>
                <span><i className="id-color fa fa-envelope-o fa-lg"></i><span className='btn'>contact@avellanaco.com</span></span>
                
              </address>
            </div>

            <div className="padding40 box-rounded mb30 text-light">
              <h3>Oficina en Argentina</h3>
              <address className="s1">
                <span><i className="fa fa-map-marker fa-lg"></i>Montevideo</span>
                <span><i className="fa fa-phone fa-lg"></i>+61 333 9296</span>
                <span><i className="fa fa-envelope-o fa-lg"></i><span className='btn'>contact@avellanaar.com</span></span>
               
              </address>
            </div>

          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
export default contact;