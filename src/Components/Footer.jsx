import React from 'react';
import Phone from '../Images/Phone.webp';
import Email from '../Images/Email.webp';
import Git from '../Images/Github.png';
import Fb from "../Images/Facebook.webp";

export default function Footer() {
  return (
    <footer className='row align-items-end ' >
          <div className='col justify-content-center'>
          <a href="tel:8303056219"><img src= {Phone} alt='Test'/> </a> 
          <a href="mailto:lewisnevin@utexas.edu">
            <img src={Email} alt='Test'/></a>
         <a href="https://github.com/Nevin-Lewis">
            <img src={Git} alt='Test'/></a>
         <a href="https://www.facebook.com/nevin.lewis.3/">
            <img src={Fb} alt='Test'/></a></div>
    </footer>
  );
};
