import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories(props) {
  console.log(props);
  return (
    <div>
      <div className="categories-item">
        {props.category ? (
          <h1 className="category"> {props.category.name} </h1>
        ) : (
          <div> {props.match.params.path} </div>
        )}
      </div>
    </div>
  );
}
