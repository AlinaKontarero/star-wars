import * as React from 'react'

const Footer = () => {return (
    <div className='column is-footer'>
      <p className="center">&copy; Test challenge completed by <a href='https://www.linkedin.com/in/alina-kontarero/'>Aline Kontarero</a> for the Sympli team <br /> {new Date().getFullYear()}</p>
    </div>
  )}

export default Footer;