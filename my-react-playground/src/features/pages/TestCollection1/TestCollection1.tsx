/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTestCollection1 } from '../../../redux/actions/TestCollection1/deleteTestCollection1Actions';
import { fetchTestCollection1 } from '../../../redux/actions/TestCollection1/testCollection1Actions';
import Loading from '../../ui/Loading/Loading';

import styles from './TestCollection1.module.css';

const TestCollection1 = () => {
  const API_URL = 'http://localhost:5000/TestCollection1';

  const dispatch = useDispatch();

  const [deletedId, setDeletedId] = useState('');

  const { testCollection1GridData, istestCollection1GridFetching, error } = useSelector(
    (state: any) => ({
      error: state.testCollection1.error,
      testCollection1GridData: state.testCollection1.data,
      istestCollection1GridFetching: state.testCollection1.loading
    })
  );

  const { isLoadingDelete } = useSelector(
    (state: any) => ({
      isLoadingDelete: state.deleteTestCollection1.loading
    })
  );

  // const fetchGridData = async (url:string) => {
  //   const response = await dispatch(fetchTestCollection1(url));
  // };

  const fetchGrid = async () => {
    dispatch(fetchTestCollection1(API_URL));
  };

  useEffect(() => {
    fetchGrid();
  }, [dispatch]);

  const onRefreshGrid = async () => {
    await fetchGrid();
  };

  const renderTableHead = () => (
    <thead>
      <tr className="table-primary">
        <th>Actions</th>
        <th>No.</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
  );

  useEffect(() => {
    if (!isLoadingDelete && deletedId !== '') {
      console.log('succesfully deleted id: ', deletedId);
      fetchGrid();
    }
  }, [isLoadingDelete]);

  const deleteGridRow = async (id: string) => {
    setDeletedId(id);
    dispatch(deleteTestCollection1(API_URL, id));
  };

  const onDeleteRow = async (object: any) => {
    await deleteGridRow(object.id);
  };

  const renderActionButtons = (object: any) => (
    <>
      <button type="button" className="btn btn-sm btn-danger" onClick={() => onDeleteRow(object)}>Delete</button>
    </>
  );

  const renderTableRow = ((object: any, ii: number) => (
    <>
      <td>
        {renderActionButtons(object)}
      </td>
      <td>{ii + 1}</td>
      <td>{object.firstName}</td>
      <td>{object.lastName}</td>
    </>
  ));

  const renderTableBody = () => (
    <tbody>
      {testCollection1GridData.map((object: any, ii: number) => (
        (ii % 2 === 0) ? (
          <tr key={ii + 1}>
            {renderTableRow(object, ii)}
          </tr>
        ) : (
          <tr key={ii + 1} className="table-warning">
            {renderTableRow(object, ii)}
          </tr>
        )
      ))}
    </tbody>
  );

  let table;
  if (error) {
    table = <h3>Error!</h3>;
  }
  if (istestCollection1GridFetching) {
    table = <Loading />;
  } else {
    table = (
      <table className="table table-hover table-bordered">
        {renderTableHead()}
        {renderTableBody()}
      </table>
    );
  }

  const header = <h1>Welcome to Test Collection Grid!</h1>;

  return (
    <div className={`${styles.TestCollection1} flex flex-col`} data-testid="TestCollection1">
      {header}
      {table}
      <button type="button" className="btn btn-primary btn-sm" onClick={onRefreshGrid}>
        Refresh grid
      </button>
      &nbsp;
      <Link to="/testcollection1/add">
        <button type="button" className="btn btn-primary btn-sm">
          Add new person
        </button>
      </Link>
      &nbsp;
      <Link to="/">
        <button type="button" className="btn btn-primary btn-sm">
          Go to Home Again
        </button>
      </Link>
    </div>
  );
};

export default TestCollection1;
