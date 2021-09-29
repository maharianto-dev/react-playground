/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTestCollection1 } from '../../../redux/actions/addTestCollection1Actions';
import styles from './TestCollection1Add.module.css';

const TestCollection1Add = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { newData, isLoading, error } = useSelector(
    (state: any) => ({
      error: state.addTestCollection1.error,
      newData: state.addTestCollection1.data,
      isLoading: state.addTestCollection1.loading
    })
  );

  const dispatch = useDispatch();

  const onFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const submitData = async (url: string, sendValue: any) => {
    dispatch(addTestCollection1(url, sendValue));
  };

  const onSubmit = async (event: any) => {
    const sendValue = {
      firstName: firstName,
      lastName: lastName
    };
    console.log('error: ', error);
    console.log('isLoading: ', isLoading);
    console.log('newData: ', newData);
    await submitData('http://localhost:5000/TestCollection1', sendValue);
    console.log('error: ', error);
    console.log('isLoading: ', isLoading);
    console.log('newData: ', newData);
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
