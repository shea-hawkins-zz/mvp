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
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="url" onChange={handleChange} />
          <label className="mdl-textfield__label" htmlFor="url">Text...</label>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={handleSubmit}>Add</button>
    </div>
  );
};
