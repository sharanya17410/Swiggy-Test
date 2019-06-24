import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
import { getPartner } from '../../actions/partner';
import Partner from './Partner';

const Partners = ({
  getPartner,
  partner: { partner },
  google,
  onMapClicked
}) => {
  var pickupxD = 0;
  var pickupyD = 0;
  var pickupxP = 0;
  var pickupyP = 0;
  partner.map(prtnr => {
    const {
      _id,
      name,
      email,
      available,
      location,
      pickupDistance,
      pickupToDropDist,
      pickUpxP,
      pickUpyP,
      pickUpxD,
      pickUpyD,
      totalDistance
    } = prtnr;
    pickupxD = pickUpxD;
  });

  useEffect(() => {
    getPartner();
  }, []);

  return (
    <Fragment>
      <h1 className='large text-primary'>Partners</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome
      </p>
      <div className='profiles'>
        {' '}
        {partner.length > 0 ? (
          partner.map(prtnr => <Partner key={prtnr._id} partner={prtnr} />)
        ) : (
          <h4>No profiles found</h4>
        )}
      </div>
      <Map
        google={google}
        initialCenter={{
          lat: -80.854885,
          lng: -23.081807
        }}
        zoom={0}
        onClick={onMapClicked}
      >
        <Marker
          title={'Partners Location.'}
          name={'SOMA'}
          position={{ lat: -79, lng: 25 }}
        />
        <Marker
          title={'PickUp'}
          name={'SOMA'}
          position={{ lat: pickupxP, lng: pickupyP }}
        />
        <Marker
          title={'Drop off Point.'}
          name={'SOMA'}
          position={{ lat: pickupxD, lng: pickupyD }}
        />
      </Map>
    </Fragment>
  );
};

Partners.propTypes = {
  getPartner: PropTypes.func.isRequired,
  partner: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    partner: state.partner
  };
};

//Connecting google maps react package with the delivery partners function

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyBhfyekbl4Y9cqQJAnP2ULXjKkXEV0kiT0'
})(Partners);
export default connect(
  mapStateToProps,
  { getPartner }
)(WrappedContainer);
