'use client';
import React, { ChangeEvent, useState } from 'react';

interface userProps {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

interface errorProps {
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: string;
}

const Page = () => {
  const intialState = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
  };
  const [user, setuser] = useState(intialState);
  const [submitted, setsubmitted] = useState(false);
  const [error, seterror] = useState<errorProps>(intialState);
  const [isFormValid, setIsFormValid] = useState(false);

  const validation = () => {
    let errors: errorProps = {};
    let formValid = true;
    const email_pattern =
      /^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$/;

    if (user.first_name === '') {
      errors.first_name = 'First name is required';
    }
    if (user.last_name === '') {
      errors.last_name = 'Last name is required';
    }
    if (user.email === '') {
      errors.email = 'Email is required';
    }
    if (user.gender === '') {
      errors.gender = 'Gender is required';
    }
    if (user.email != '' && !email_pattern.test(user.email)) {
      errors.email = 'Please enter the email correct format';
    }
    seterror(errors);
    formValid = Object.keys(errors).length === 0;
    return formValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }).then(() => {
        console.log('Successfully Added');
        setsubmitted(true);
        setuser(intialState);
        (e.target as HTMLFormElement).reset();
      });
    }
  };

  const handleChange = (e: ChangeEvent) => {
    setuser({
      ...user,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Customer Registration</h1>
        {submitted && <h3>Registered Successfully</h3>}

        <input
          type="text"
          placeholder="First name"
          name="first_name"
          onChange={handleChange}
        />
        {error.first_name && <p>{error.first_name}</p>}
        <input
          type="text"
          placeholder="Last name"
          name="last_name"
          onChange={handleChange}
        />
        {error.last_name && <p className="error">{error.last_name}</p>}
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        {error.email && <p className="error">{error.email}</p>}
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="">select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {error.gender && <p className="error">{error.gender}</p>}

        <button>Submit</button>
      </form>
    </>
  );
};

export default Page;
