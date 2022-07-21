import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRockets, RemoveRockets } from '../Redux/Rockets/RocketSlice';
import RocketItem from './RocketItem';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  const AddReserve = (specificID) => {
    dispatch(addRockets(specificID));
  };

  const RemoveReserve = (specificID) => {
    dispatch(RemoveRockets(specificID));
  };

  return (
    <div className="rocketsPage">
      <ul className="rocketsContainer">
        {rockets.map((rocket) => (
          <RocketItem
            key={rocket.ID}
            id={rocket.ID}
            name={rocket.name}
            image={rocket.image}
            description={rocket.description}
            reserved={rocket.reserved}
            onAddReserve={AddReserve}
            onRemoveReserve={RemoveReserve}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
