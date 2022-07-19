import React from 'react';

const Rockets = () => {
  const myarr = [
    {
      id: '1',
      img: 'image',
      title: 'Falcon1',
      description: 'blablabla',
      reserved: false,
    },
  ];

  const rendered = myarr.map((data) => (
    <div key={data.id}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      {data.reserved === true ? <button type="button">Reserve Rocket</button>
        : <button type="button">Cancel Reservation</button>}

    </div>
  ));

  return (
    <div>
      {rendered}
    </div>
  );
};

export default Rockets;
