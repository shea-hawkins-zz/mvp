import React from 'react';

export default (props) => {
  var inputUrl = '';
  var handleChange = function(event) {
    inputUrl = event.target.value;
  };
  var handleSubmit = function() {
    props.addToQueue(inputUrl);
  };
  return (
    <div>
      <label>Url</label>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
