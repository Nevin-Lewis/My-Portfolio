import React from 'react';
import T4K from "../Images/T4K.jpg";
import {Image} from 'react-bootstrap';

export default function About() {
  return (
    <div className= "row align-items-center" >
    <div className='text-left' >
      <h1> About Me</h1>
    </div>
    <div className='"row'> 
    <div className='col-3'>
        <Image src={T4K} className='img-fluid profile2'
           alt='responsive profile' />
      </div> 
    </div>
    <div className='test-left'>
        <div className="col-6">
          <p> My name is Nevin and I am a full-stack software developer. I Will add more to this later. This is simply filler text until I take the time to write about myself.</p>
        </div>
        </div>
      </div>
      
  );
}
