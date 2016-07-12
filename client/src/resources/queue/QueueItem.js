import React from 'react';

export default (props) =>  {
  var onClick = function() {
    props.changeCurrent(props.item);
  };
  return (
    <a className="mdl-navigation__link" onClick={onClick}>{props.item.url}</a>
  );
};
