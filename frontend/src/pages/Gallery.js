import React from 'react'

const Gallery = () => {
  return (
    <div>
     <section className="trust">
        <div className="container">
            <div className="row">
                <div className="offset-xl-1 col-xl-6" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                    <div className="title">
                        <h6 className="title-primary">Our Gallery</h6>
                        <h1>The Cause we Live for</h1>
                    </div>
                    <p>Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus. Proin nec viverra
                        turpis. Nulla eget justo scelerisque, pretium purus vel, congue libero. Suspendisse potenti.
                    </p>
                    <h5>Police Brutality</h5>
                    <ul className="list-unstyled">
                        <li>Illegal Arrest</li>
                        <li>Untrainned Armed Men of the Force</li>
                        <li>Citizen Vitimization</li>
                        <li>Un-friendly police force</li>
                    </ul>
                </div>
                <div className="col-xl-5 gallery">
                    <div className="row no-gutters h-100" id="lightgallery">
                        <a href="https://lorempixel.com/600/400/" className="w-50 h-100 gal-img" data-aos="fade-up"
                            data-aos-delay="200" data-aos-duration="400">
                            <img className="img-fluid" src="assets/images/gallery1.jpg" alt="Gallery Image"/>
                            <i className="fa fa-caret-right"></i>
                        </a>
                        <a href="https://lorempixel.com/600/400/" className="w-50 h-50 gal-img" data-aos="fade-up"
                            data-aos-delay="400" data-aos-duration="600">
                            <img className="img-fluid" src="assets/images/gallery2.jpg" alt="Gallery Image"/>
                            <i className="fa fa-caret-right"></i>
                        </a>
                        <a href="https://lorempixel.com/600/400/" className="w-50 h-50 gal-img gal-img3" data-aos="fade-up"
                            data-aos-delay="0" data-aos-duration="600">
                            <img className="img-fluid" src="assets/images/gallery3.jpg" alt="Gallery Image"/>
                            <i className="fa fa-caret-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
  )
}

export default Gallery;
