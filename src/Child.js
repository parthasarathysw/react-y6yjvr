import React, { useState } from 'react';
import './style.css';

export default function Child(prop) {
  const [PrtName, setPrtName] = useState(prop.UserName);

  return (
    <div>
      <input
        type="text"
        value={PrtName}
        onChange={(e) => {
          setPrtName(e.target.value);
          prop.changeUserName(e.target.value);
        }}
      />
    </div>
  );
}
