import React from 'react';

function Box(props) {
  const { backgroundColor, width, height, onDelete } = props;

  const boxStyle = {
    backgroundColor: backgroundColor || 'lightgray',
    width: width || 100,
    height: height || 100
  };

  return (
    <div style={boxStyle}>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Box;
