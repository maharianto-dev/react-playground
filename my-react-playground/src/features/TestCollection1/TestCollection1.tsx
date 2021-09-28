/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { fetchTestCollection1StartAsync } from '../../redux/testCollection1/testCollection1.actions';
import {
  selectTestCollection1List,
  selectIsTestCollection1ListFetching
} from '../../redux/testCollection1/testCollection1.selector';
import Loading from '../Loading/Loading';

import styles from './TestCollection1.module.css';

interface Props {
  fetchTestCollection1StartAsync: any,
  testCollection1List: any,
  isTestCollection1Fetching: any
}

const TestCollection1: FC<Props> = ({ fetchTestCollection1StartAsync, testCollection1List, isTestCollection1Fetching }) => {
  useEffect(() => {
    fetchTestCollection1StartAsync('http://localhost:5000/TestCollection1');
  }, []);

  const renderTableHead = () => (
    <thead>
      <tr className="table-primary">
        <th>No.</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
  );

  const renderTableRow = ((object: any, ii: number) => (
    <>
      <td>{ii + 1}</td>
      <td>{object.firstName}</td>
      <td>{object.lastName}</td>
    </>
  ));

  const renderTableBody = () => (
    <tbody>
      {testCollection1List.map((object: any, ii: number) => (
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
  if (isTestCollection1Fetching) {
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

const mapStateToProps = createStructuredSelector<any, any>({
  testCollection1List: selectTestCollection1List,
  isTestCollection1Fetching: selectIsTestCollection1ListFetching
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  fetchTestCollection1StartAsync
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCollection1);
