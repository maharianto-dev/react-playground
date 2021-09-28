/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TestCollection1Add.module.css';

const TestCollection1Add = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const onSubmit = (event: any) => {
    const sendValue = {
      firstName: firstName,
      lastName: lastName
    };
    console.log('sendValue: ', sendValue);
    event.preventDefault();
  };

  const header = <h1>Add A New Person!</h1>;

  const formButtons = (
    <>
      <button type="submit" className="btn btn-sm btn-primary">
        Add New Person
      </button>
      &nbsp;
      <Link to="/testcollection1">
        <button type="button" className="btn btn-sm btn-primary">
          Close
        </button>
      </Link>
    </>
  );

  const form = (
    <form onSubmit={onSubmit}>
      <div className="form-group row mb-2">
        <label
          className="form-label col-sm-3"
          htmlFor="test-collection1-first-name-add"
        >
          First Name:
        </label>
        <div className="col-sm-6">
          <input
            id="test-collection1-first-name-add"
            type="text"
            className="form-control form-control-sm"
            placeholder="Input your first name"
            value={firstName}
            onChange={onFirstNameChange}
          />
        </div>
      </div>
      <div className="form-group row mb-2">
        <label
          className="form-label col-sm-3"
          htmlFor="test-collection1-last-name-add"
        >
          Last Name:
        </label>
        <div className="col-sm-6">
          <input
            id="test-collection1-last-name-add"
            type="text"
            className="form-control form-control-sm"
            placeholder="Input your last name"
            value={lastName}
            onChange={onLastNameChange}
          />
        </div>
      </div>
      {formButtons}
    </form>
  );

  return (
    <>
      <div className={styles.TestCollection1Add} data-testid="TestCollection1Add">
        {header}
        {form}
      </div>
    </>
  );
};

export default TestCollection1Add;
