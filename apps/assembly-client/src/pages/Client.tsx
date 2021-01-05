import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bomb = () => {
  throw new Error('💥 CABOOM 💥');
};

export const Client = () => {
  const [explode, setExplode] = useState(false);

  return (
    <div>
      Client<Link to="./test">Test</Link>
      <button
        onClick={() => {
          setExplode(true);
        }}
      >
        Explode
      </button>
      {explode ? <Bomb /> : null}
    </div>
  );
};
