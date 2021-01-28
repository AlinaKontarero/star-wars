import * as React from 'react'

const Footer = () =>  (
    <footer className='column is-full is-footer footer'>
      <div className="content has-text-centered">
      <p className="">&copy; Test challenge completed by <a href='https://www.linkedin.com/in/alina-kontarero/'>Aline Kontarero</a> for the Sympli team <br /> {new Date().getFullYear()}</p>
      </div>
    </footer>
  )

export default Footer;