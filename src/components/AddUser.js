import { useState } from 'react';
import { useUser, useUserDispatch } from '../hooks/UserContext';

export default function AddUser() {
  const username = useUser();
  const dispatch = useUserDispatch();
  const [text, setText] = useState(username);

  return (
    <>
      <label>User: </label>
      <input
        placeholder="Username"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        dispatch({
          type: 'added',
          text: text,
        }); 
      }}>Save</button>
    </>
  );
}

let nextId = 3;
