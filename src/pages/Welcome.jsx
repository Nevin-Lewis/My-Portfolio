import React from 'react';
import profile from "../Images/ProfilePhoto.jpeg";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';

function Welcome() {
  return (
    <div className='row h-100'>
      <div className='row'>
        <div className='col-8 offset-1 align-self-center'>
          <ul className='Welcome'>
            <li> Hi,</li>
            <li> I&apos;m <Link to='/home'>Nevin</Link></li>
            <li> Lewis</li>
          </ul>
        </div>
        <div className='col-6 col-xs-4 offset-4 pPhoto'>
          <Image src={profile} className='img-fluid profile'
           alt='responsive profile'/>
        </div>
      </div>
       <Footer />
    </div>
  );
}

export default Welcome;

//onClick={changeBackground()}