import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { image, name, description } = props;

  return (
    <li>
      <img src={image} alt="rocket" />
      <h3>{name}</h3>
      <p>{description}</p>
      {/* {reserved === true ? (
      <button type="button">Reserve Rocket</button>
    ) : (
      <button type="button">Cancel Reservation</button>
    )} */}
    </li>
  );
};

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketItem;
