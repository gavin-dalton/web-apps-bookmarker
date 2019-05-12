import React from 'react';
import { Link } from "react-router-dom";

const Alphabet = () => {
  const index = ['**', 'A', 'B', 'C', 'D', 'E'];
  // console.log(props);

  return (
    <div>
      {index.map((v, i) => {
        return (
          <Link
            key={i}
            to={v === '**' ? '/' : `/${v}`}
            className="btn mt-2 mx-2"
          >{v}</Link>
        );
      })}
    </div>
  );
};

export default Alphabet;
