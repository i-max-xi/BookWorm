import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/RocketSlice';
import RocketItem from './RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  // const myarr = [
  //   {
  //     id: "1",
  //     img: "image",
  //     title: "Falcon1",
  //     description: "blablabla",
  //     reserved: false,
  //   },
  // ];

  useEffect(() => {
    dispatch(fetchRockets(rockets));
  }, [dispatch]);

  return (
    <div className="rocketsPage">
      <ul className="rocketsContainer">
        {rockets.map((rocket) => (
          <RocketItem
            key={rocket.id}
            name={rocket.name}
            image={rocket.image}
            description={rocket.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
