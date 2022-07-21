import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMissions, fetchMissions, removeMissions } from '../Redux/Missions/MissionSlice';
import MissionItem from './MissionItem';
import '../styles/missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missions);

  const onAddMissions = (specificID) => {
    dispatch(addMissions(specificID));
  };

  const onRemoveMissions = (specificID) => {
    dispatch(removeMissions(specificID));
  };

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
              reserved={mission.reserved}
              onAddMission={onAddMissions}
              onRemoveMission={onRemoveMissions}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
