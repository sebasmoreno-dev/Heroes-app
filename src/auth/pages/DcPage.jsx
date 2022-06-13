import React from "react";
import HeroList from "./../components/hero/HeroList";

const DcPage = () => {
  return (
    <div>
      <h1>Dc Screen</h1>
      <HeroList
        publisher="DC Comics"
      />
    </div>
  );
};

export default DcPage;
