import React from 'react';
import PropTypes from 'prop-type';

//Displaying individual delivery partner details
const Partner = ({
  partner: {
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
  }
}) => {
  return (
    <div className='profile bg-light'>
      <div>
        <h2>Name : {name}</h2>
        <p>Available for pickup : {available}</p>
        <p>Email ID : {email}</p>
        <p className='my-1'> Distance to Pickup : {pickupDistance}</p>
        <p className='my-1'>
          Distance from pickup to Drop off : {pickupToDropDist}
        </p>
        <p className='my-1'>
          Pick up Location Lat:{pickUpxP} : Lng:{pickUpyP}
        </p>
        <p className='my-1'>
          Drop off Location Lat:{pickUpxD} : Lng:{pickUpyD}
        </p>
        <p>Total Distance to be covered : {totalDistance}</p>
      </div>
    </div>
  );
};

export default Partner;
