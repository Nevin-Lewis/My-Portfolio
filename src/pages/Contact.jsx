import React, { useState} from 'react';

export default function Contact() {
  const [thoughtText, setThoughtText] = useState('');
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'nameText') {
          setNameText(value);}

          if (name === 'emailText') {
            setEmailText(value);}


        if (name === 'thoughtText' && value.length <= 280) {
          setThoughtText(value);
          setCharacterCount(value.length);
        }
      };
    
      return (
        <div className='justify-content-center'>
          <h2>Please enter your info here</h2>
    
        
              <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
              >
                 <div className="col-6">
                  <h4>Name</h4>
                  <textarea
                    name="nameText"
                    placeholder="Enter your name here"
                    value={nameText}
                    className="form-input w-100"
                    style={{ lineHeight: '.75', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-6">
                  <h4>Email:</h4>
                  <textarea
                    name="emailText"
                    placeholder="Enter your email here"
                    value={emailText}
                    className="form-input w-100"
                    style={{ lineHeight: '.75', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                </div>
  
                <div className="col-6">
                <h4>Message:</h4>
                  <textarea
                    name="thoughtText"
                    placeholder="Here's a new thought..."
                    value={thoughtText}
                    className="form-input w-100"
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <p
                className={`m-0 ${
                  characterCount === 280 ? 'text-danger' : ''
                }`}
              >
                Character Count: {characterCount}/280
              </p>
                <div className="col-12 col-lg-3">
                  <button className="btn btn-primary btn-block py-3" type="submit">
                    Contact Me
                  </button>
                </div>
              </form>
            </div>
)
}
