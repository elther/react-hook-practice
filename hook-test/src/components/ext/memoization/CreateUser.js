import React from 'react';

export default function CreateUser(props){
    return (
      <div>
        <input type="text" value={props.name} />
        <input type="email" value={props.email} />
      </div>
    );
}
