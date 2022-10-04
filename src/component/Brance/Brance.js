import React from "react";
import brance1 from "../../images/branc1.jpg";
import brance2 from "../../images/branc2.jpg";
import brance3 from "../../images/branc3.jpg";

const Brance = () => {
  return (
    <div>
      <h1 className="text-3xl font-serif tracking-widest font-bold text-pink-400  mt-20">
        There Are Three Brance In Our Country.
      </h1>
      <div className=" sm:justify-center lg:ml-96 mt-28  ">
        {/* brance start here */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={brance1} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Chittagong Brance</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #FRUITS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #VEGETABLES
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #SNAKES
            </span>
          </div>
        </div>
        {/* brance end  here */}
        {/* brance start here */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={brance2} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Dhaka Brance</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #FRUITS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #VEGETABLES
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #SNAKES
            </span>
          </div>
        </div>
        {/* brance end  here */}
        {/* brance start here */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={brance3} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Sylhet Brance</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #FRUITS
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #VEGETABLES
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #SNAKES
            </span>
          </div>
        </div>
        {/* brance end  here */}
      </div>
    </div>
  );
};

export default Brance;
