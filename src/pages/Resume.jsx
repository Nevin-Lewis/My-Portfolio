import React from 'react';
import Resumes from '../Images/Revised Resume.pdf';

export default function Resume() {
  return (
    <section className="row" id ="resume">
   
    <div className='row'> <h2 className='text-center'>Experience</h2>
      <div className='col-6'>
        <ul>
          <h3>05/21 - 03/22</h3>
          <li>Medical Scibe @ Diabetes and Glandular Disease Clinic</li>
          <li>I was a scribe for Dr. Akhrass and Dr. Vadakekalam. I chart their patient visits into the electronic medical records while observing their interactions with patients. I gain valuable insight into the relative medical terminology, medications and procedures related to endocrinology.</li>
        </ul>
      </div>
      <div className='col-6'>
        <ul>
          <h3>06/20 - 05/21</h3>
          <li>Project Manager @ Kulstoff Compiste Products</li>
          <li>Oversaw production of new type of anchor, STB. Oversaw training and management of the new production process and continuation of imbed anchor production.</li>
        </ul>
      </div>
      <div className='col-6'>
        <ul>
          <h3>08/14 - 06/20</h3>
          <li>Production Lead @ Kulstoff Compiste Products</li>
          <li>One of four producers of a patented carbon fiber anchor design.  Assisted in the expansion, advancement, and trainings for the production process</li>
        </ul>
      </div>
      <div className='col-6'>
        <ul>
          <h3>06/18-5/20</h3>
          <li>Summer Fellow and Research Mentor @ University of Texas Supramolecular Sensor Lab</li>
          <li>I was one of four paid summer fellows for an undergraduate research lab. Helped further established research and began pioneering a new method to commercialize process. Then I continued research in the lab working on a new project regarding plant metabolite extraction and analysis.</li>
        </ul>
      </div>
      </div>
      <div className='row'> <h2 className='text-center'>Leadership</h2>
      <div className='col-6'>
        <ul>
          <li>Equipment and Gear Manger @ Texas 4000</li>
          <li>One of three lead mechanics for a team of 83 Riders. Trained team and mechanics on bike repair. Outfitted a trailer to transport 28 riders’ bikes and gear for a 70-day cross country bike trip.</li>
        </ul>
      </div>
      <div className='col-6'>
        <ul>
          <li>Lab Mentor @ University of Texas Supramolecular Sensor Lab</li>
          <li>In charge of a team of 5 students. Group projects involve extraction procedure of metabolites in plants and establishment of baseline metabolome.</li>
        </ul>
      </div>
      </div>
      <h2 className='text-center'>Click <a href={Resumes}>HERE</a> to download my resume.</h2> 
    </section>
  );
}
