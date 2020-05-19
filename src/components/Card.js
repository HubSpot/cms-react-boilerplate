import React, { useState } from 'react';
import './Card.scss';

function Card({ initialClickCount }) {
  const [clickCount, setClickCount] = useState(initialClickCount);
  const pluralize = (n, noun, suffix) =>
    `${n !== 1 ? 'are' : 'is'} ${n} ${noun + (n !== 1 ? suffix : '')}`;

  return (
    <div className="cms-react-boilerplate__card">
      <p>
        {`There ${
          clickCount > 0
            ? pluralize(clickCount, 'reason', 's')
            : 'are so many reasons'
        } to use HubSpot CMS + React!`}
      </p>
      <button className="btn" onClick={() => setClickCount(clickCount + 1)}>
        Click me!
      </button>
    </div>
  );
}

export default Card;
