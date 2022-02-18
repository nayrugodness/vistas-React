import React from 'react';
import SliderMain from '../components/SliderMain';
import Footer from '../components/footer';


const home= () => (
  <div>
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/bg-shape-1.jpg'})`}}>
         <SliderMain/>
      </section>

    <Footer />

  </div>
);
export default home;