import React from "react";
import cover from "../../images/cover1.jpg";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-16  mb-8">
        <div class="card w:3/4 lg:w-2/4 ">
          <figure class="px-10 pt-10">
            <img src={cover} alt="Shoes" class="rounded-xl" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
