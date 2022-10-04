import React from "react";
import img1 from "../../images/frt-1.jpg";
import img2 from "../../images/frt-2.jpg";
import img3 from "../../images/frt-3.jpg";
import img4 from "../../images/frt-4.jpg";
import img5 from "../../images/frt-5.jpg";
import img6 from "../../images/frt-6.jpg";
import img7 from "../../images/frt-7.jpg";
import img8 from "../../images/frt-8.jpg";
import img9 from "../../images/frt-9.jpg";

const Product = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 ml-8 mr-8">
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Strawberry!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Pear!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Congratulations random Internet user!
                  </h3>
                  <p className="py-4">
                    You've been selected for a chance to get one year of
                    subscription to use Wikipedia for free!
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">
                      Yay!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Apple!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img4} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Indian Apple!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img5} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Lychee!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img6} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Lemon!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img7} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Orange!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img8} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Chines Apple!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
        {/* first card */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img9} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Water melon!</h2>
            <p>Do You Have About Interest It?</p>
            <div class="card-actions">
              <label
                htmlFor="my-modal"
                className=" mt-6 text-xl border-2 py-2 px-4 border-pink-400 hover:bg-blue-300 hover:border-blue-300 hover:ease-out duration-300 rounded"
              >
                Buy Now
              </label>

              {/* Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-3xl">
                    Congratulations This Is Available for You!
                  </h3>
                  <p className="py-4 text-2xl font-bold text-pink-700">
                    This Product Price Is 135Taka
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my-modal"
                      className="border-white text-white rounded font-bold text-xl border-2 py-2 px-4 bg-blue-400"
                    >
                      Thank You!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
      </div>
    </div>
  );
};

export default Product;
