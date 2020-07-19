import React from 'react';
import Logo from "../components/Logo";

const NavBar = () => {
  return (
    <div>
      <header className="position-absolute w-100">
        <div className="container">
            <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
                <div className="contact">
                    <a href="tel:+1234567890" className="tel"><i className="fa fa-phone" aria-hidden="true"></i>+2348039415912</a>
                    <a href="mailto:info@yourmail.com"><i className="fa fa-envelope"
                            aria-hidden="true"></i>info@ogaibeg.com</a>
                </div>
                <nav className="d-flex aic">
                    <a href="#" className="login"><i className="fa fa-user" aria-hidden="true"></i>Login</a>
                    <ul className="nav social d-none d-md-flex">
                        <li><a href="https://www.facebook.com/ogaibe" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.gmail.com/ogaibe" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="https://www.twitter.com/ogaibe" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                </nav>
            </div>
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/" ><Logo src="./images/unnamed.png" alt="ogaiBEG"/> </a>
                <div className="group d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                </div>
                <a className="search-icon d-none d-md-block" href="#"><i className="fa fa-search"></i> Search </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>
                         <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact-us">Contact Us</a></li>
                    </ul>
                    <form className="bg-white search-form" method="get" id="searchform">
                        <div className="input-group">
                            <input className="field form-control" id="s" name="s" type="text" placeholder="Search"/>
                            <span className="input-group-btn">
                                <input className="submit btn btn-primary" id="searchsubmit" name="submit" type="submit"
                                    value="Search"/>
                            </span>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </header>
    </div>
    
  )
}

export default NavBar
