import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { clickedUser: state.clickedUser };
}

class ConnectedProfileDryverDetails extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <div className='ryder-dryver-details-wrapper'>
            <h4>Dryver</h4>
            <p>Rating goes here: ####</p>
            <p>Type of car goes here: @@@@</p>
            <p>~~~~~~~FIGURE OUT HOW TO LIST REVIEWS/COMMENTS HERE~~~~~~~~</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileDryverDetails = connect(mapStateToProps)(ConnectedProfileDryverDetails);

export default ProfileDryverDetails;
