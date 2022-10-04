import React from "react";
import veg1 from "../images/veg-1.jpg";
import veg2 from "../images/vg-2.jpg";
import veg3 from "../images/vg-3.jpg";
import veg4 from "../images/vg-4.jpg";
import veg5 from "../images/vg-5.jpg";
import veg6 from "../images/vg-6.jpg";
import veg7 from "../images/vg-7.jpg";
import veg8 from "../images/vg-8.jpg";
import veg9 from "../images/vg-9.jpg";
import veg10 from "../images/vg-10.jpg";
import veg11 from "../images/vg-11.jpg";
import veg12 from "../images/vg-12.jpg";

const Vegetable = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-32 ml-8 mr-8 mb-16">
        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Tomato!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}
        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Corn!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg7} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Black verry!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg4} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Green Tomato!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg5} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Potato!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg6} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Masrom!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Spinach!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg8} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Chili!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg9} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Broccoli!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg10} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Lettuce!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg11} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Kholarabi!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}

        {/* card start */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={veg12} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Tomato!</h2>
            <p>Do You Have Interest it?</p>
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
        {/* card end  */}
      </div>
    </div>
  );
};

export default Vegetable;
