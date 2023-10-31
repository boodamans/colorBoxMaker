import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);
  
    const addBox = (boxData) => {
        boxData.width = parseInt(boxData.width);
        boxData.height = parseInt(boxData.height);
        setBoxes([...boxes, boxData]);
    };

  return (
    <div>
      <h1>Box List</h1>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          onDelete={() => {
            const newBoxes = [...boxes];
            newBoxes.splice(index, 1);
            setBoxes(newBoxes);
          }}
        />
      ))}
    </div>
  );
}

export default BoxList;
