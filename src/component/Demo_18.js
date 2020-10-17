import React from 'react';
import 'tachyons';

export const Demo_18 = ({ img, name, description }) => {
  return (
    <div
      className='bg-light-gray dib br3 pa3 ma2 grow bw1 shadow-5 dim'
      style={({ background: '#eeeeeb' }, { boxShadow: '24px 24px 48 #c3c3cl' })}
    >
      <img
        className='br3'
        style={{ height: '200px' }}
        src={require(`../image/${img}.PNG`)}
        alt='demo'
      />
      <h2 className=''>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Demo_18;
