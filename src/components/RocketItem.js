import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rocket.css';

const RocketItem = (props) => {
  const {
    image, name, description, reserved, onAddReserve, id,
  } = props;

  return (
    <li className="rocketItem">
      <div className="imgDescription">
        <img src={image} alt="rocket" />
      </div>
      <div className="textDescription">
        <h3>{name}</h3>
        <p>{description}</p>
        {reserved ? (
          <button type="button" className="activeBtn">
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className="activeReserve"
            onClick={() => onAddReserve(id)}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  onAddReserve: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketItem;
