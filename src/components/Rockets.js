import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../Redux/Rockets/RocketSlice";
import RocketItem from "./RocketItem";

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rocketsPage" data-testid="rocketsElement">
      <ul className="rocketsContainer">
        {rockets.map((rocket) => (
          <RocketItem
            key={rocket.ID}
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
