import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";

const SmurfData = props => {
  console.log("Smurf Data", props);
  return (
    <>
      <button
        onClick={() => {
          props.getSurfData();
        }}
      >
        get random smurf
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        <div>Smurf: {props.smurf.name}</div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurf: state.smurf
  };
};

export default connect(
  mapStateToProps,
  { getSmurfData }
)(SmurfData);
