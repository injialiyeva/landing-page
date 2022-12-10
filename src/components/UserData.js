import React, { useState } from "react";

const UserData = () => {
  const [inputs, setInputs] = useState([
    { title: "Jerry", id: 1 },
    { title: "George", id: 2 },
    { title: "Elaine", id: 3 },
  ]);

  return (
    <div>
      <div>
        {inputs.map((input) => {
          return <li key={input.id}>{input.title}</li>;
        })}
      </div>
    </div>
  );
};

export default UserData;
