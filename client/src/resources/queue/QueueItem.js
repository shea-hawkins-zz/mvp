import React from 'react';

export default (props) =>  {
  var onClick = function() {
    props.changeCurrent(props.item);
  };
  return (
    <li onClick={onClick}>{props.item.url}</li>
  );
};
