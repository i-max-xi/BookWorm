import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rocket.css';

const RocketItem = (props) => {
  const { image, name, description } = props;

  return (
    <li className="rocketItem">
      <div className="imgDescription">
        <img src={image} alt="rocket" />
      </div>
      <div className="textDescription">
        <h3>{name}</h3>
        <p>{description}</p>
        {/* {reserved === true ? (
        <button type="button">Reserve Rocket</button>
      ) : (
        <button type="button">Cancel Reservation</button>
      )} */}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketItem;
