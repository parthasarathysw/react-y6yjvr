import React, { useState } from 'react';
import './style.css';

export default function Child(prop) {
  const [PrtName, setPrtName] = useState();

  return (
    <div>
      <input
        type="text"
        value={PrtName}
        onChange={(e) => {
          setPrtName(e.target.value);
        }}
      />
    </div>
  );
}
