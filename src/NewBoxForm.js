import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [boxData, setBoxData] = useState({ backgroundColor: '', width: '', height: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoxData({ ...boxData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(boxData);
    setBoxData({ backgroundColor: '', width: '', height: ''});
    console.log(boxData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={boxData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={boxData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={boxData.backgroundColor}
        onChange={handleChange}
      />
      <button type="submit">Create Box</button>
    </form>
  );
}

export default NewBoxForm;
