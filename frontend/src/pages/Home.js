import React from 'react'

const Home = () => {
  return (
    <div>
         <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="swiper-container hero-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide-content d-flex align-items-center">
                                <div className="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">OgaiBEG<br/> Knowing Your Rights 
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">A one-stop place, where you are 
                                        kept up to date on the happenings in government<br/>You can't afford to be, un-informed, in a time like this.
                                    </p>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">See More About Us</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Get to Know Us</a>
                                </div>
                            </div>
                            <div className="swiper-slide slide-content d-flex align-items-center">
                                <div className="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">OgaiBEG<br/> Know What is Happening
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">A one-stop place, where you are
                                        kept up to speed on the government dealings<br/> Government information at your finger-tip.
                                    </p>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">See More About Us</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Get in Touch with Us</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <span className="arr-left"><i className="fa fa-angle-left"></i></span>
            <span className="arr-right"><i className="fa fa-angle-right"></i></span>
        </div>
        <div className="texture"></div>
        <div className="diag-bg"></div>
    </section>
    </div>
  )
}

export default Home;
