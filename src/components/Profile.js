import '../styles/profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reserved,
  );
  const missions = useSelector((state) => state.missions).filter(
    (mission) => mission.reserved,
  );

  return (
    <div className="profilePage">
      <div className="filteredContainer">
        <h2>My Missions</h2>
        <ul className="filteredList">
          {missions.length > 0 ? (
            missions.map((mission) => (
              <li key={mission.name}>{mission.name}</li>
            ))
          ) : (
            <p key="message">You haven&apos;t joined any missions yet.</p>
          )}
        </ul>
      </div>
      <div className="filteredContainer">
        <h2>My Rockets</h2>
        <ul className="filteredList">
          {rockets.length > 0 ? (
            rockets.map((rocket) => <li key={rocket.name}>{rocket.name}</li>)
          ) : (
            <p key="message">You don&apos;t have any rockets yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
