import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/MissionSlice';
import MissionItem from './MissionItem';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missions);

  const reserved = false;

  return (
    <div className="missionsPage">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            {/* Added an empty div inside this last table header, otherwise we get
          an error in eslint */}
            <th>
              <div />
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
