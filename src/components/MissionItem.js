import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button type="button">
          {reserved ? 'Active Member' : 'Not A Member'}
        </button>
      </td>
      <td>
        <button type="button">
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionItem;
