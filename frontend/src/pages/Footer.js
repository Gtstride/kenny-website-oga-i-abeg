import React from 'react'

const Footer = () => {
  return (
    <div className="foot-note">
      <div className="container">
        <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
          <p className="mb-0" data-aos="fade-right" data-aos-offset="0">
            &copy; {new Date().getFullYear()} All Rights Reserved. Design by{' '}
            <a
              href="https://freehtml5.co/multipurpose"
              target="_blank"
              rel="noopener noreferrer"
              className="fh5-link"
            >
              Godstime .O. Agho
            </a>
            .
          </p>
          <p className="mb-0" data-aos="fade-left" data-aos-offset="0">
            <a href="/footer">Terms Of Use</a>
            <a href="#">Privacy & Security Statement</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
