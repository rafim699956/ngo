import React from "react";

const Content = ({ SectionTitle, shortDes, des }) => {
  return (
    <>
      {SectionTitle && <h2>{SectionTitle}</h2>}
      {shortDes && <p>{shortDes}</p>}
      {des && <p>{des}</p>}
    </>
  );
};

export default Content;
