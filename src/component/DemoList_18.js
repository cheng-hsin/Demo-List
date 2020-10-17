import React from 'react';
import Demo_18 from './Demo_18';

export const DemoList_18 = ({ demos }) => {
  return (
    <div>
      {demos.map((project, i) => {
        return (
          <Demo_18
            key={i}
            img={project.img}
            name={project.name}
            description={project.description}
          />
        );
      })}
    </div>
  );
};

export default DemoList_18;
