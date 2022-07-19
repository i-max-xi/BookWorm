import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/MissionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missions);

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
            <tr key={mission.id}>
              <td key={mission.id}>{mission.name}</td>
              <td key={mission.id}>{mission.description}</td>
              <td key={mission.id}>
                <button type="button">
                  {mission.reserved ? 'Active Member' : 'Not A Member'}
                </button>
              </td>
              <td key={mission.id}>
                <button type="button">
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
