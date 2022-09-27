import React, { useState } from 'react';
import validator from 'validator';

export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');

  // const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setEmail(value);
  };

  const handleFormSubmit = () => {
    const openMail = () => {
        let link = 'mailto:azariahdanielgarrido@gmail.com'
        + `?Subject=${firstName}`
        + `&body=Hello Azariah, my name is ${firstName}. I have a job opportunity I think you'd be a good fit for.`
        window.location.href = link;
        setFirstName('');
        setEmail('');
    };
    openMail();
  };

  const isEmail = () => {
   let checkE = validator.isEmail(email);
   if(checkE) {
    handleFormSubmit()
   } else {
    alert('Invalid Email');
   }
  };

  const startCheck = () => {
    if(!firstName) {
      alert('Please enter a first name')
    } else {
      isEmail()
    }
  };


  return (
    <div>
        <div className='helloName'>
            <p>
                Enter your name: {firstName}
            </p>
            <p>
                Enter your email: {email}
            </p>
        </div>
        <form className="form">
            <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            />
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            />
            <button type="button" onClick={startCheck}>
            Submit
            </button>
        </form>
    </div>
  );
}