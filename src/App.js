import React, { useState } from 'react';
import './style.css';
import Child from './Child';

export default function App() {
  const [UserName, setUserName] = useState('Candidate');
  return (
    <div>
      <h1>Hello {UserName}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Child changeUserName={setUserName} UserName={UserName} />
    </div>
  );
}
