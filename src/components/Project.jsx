import React from 'react';

const Project = (props) => {
  const { image, title } = props.item;
  return (
    <div className="project">
      <div class="">
        <img src={image} alt="/" className="" />
        <div class="">
          {/* <h2 class="">{title}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
