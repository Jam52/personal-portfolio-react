import React, { useEffect, useState } from 'react';

const FadeInTransition = (props) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    });
  });
  return (
    <div style={{ opacity: opacity, transition: 'opacity 0.3s ease-in 0.3s' }}>
      {' '}
      {props.children}
    </div>
  );
};

export default FadeInTransition;
