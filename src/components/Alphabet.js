import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Alphabet = (props) => {
  const [active, setActive] = useState('**');
  const index = ['**', 'A', 'B', 'C', 'D', 'E'];
  console.log(props.route);

  useEffect(() => {
    if(props.route) {
      if(props.route === '/') {
        setActive('**');
      } else {
        setActive(props.route);
      }
    }
    // Effect clean-up function
    return () => true;
  }, [props.route])

  return (
    <div>
      {index.map((v, i) => {
        return (
          <Link
            key={i}
            to={v === '**' ? '/' : `/${v}`}
            className={'btn mt-2 mx-2' + (v === active ? ' btn-primary' : '')}
          >{v}</Link>
        );
      })}
    </div>
  );
};

export default Alphabet;
