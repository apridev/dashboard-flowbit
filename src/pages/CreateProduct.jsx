import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Layout>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiShoppingBag}>Ecommerce</Breadcrumb.Item>
            <Breadcrumb.Item
              className="cursor-default"
              onClick={() => navigate("/product")}
            >
              Product
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="cursor-default"
              onClick={() => navigate("/product/create-product")}
            >
              Create
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white shadow dark:bg-gray-300 pt-1 pl-3 pb-4 mt-3 rounded-lg">
            {/* Title */}
            <p className="mt-5 mb-5 text-2xl font-medium mr-4">
              Create Product
            </p>

            {/* Form */}
            <div>
              <form className="gap-4 pr-4 space-y-3">
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your product name..."
                  />
                </div>

                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Smartphone</option>
                  <option>Tablet</option>
                  <option>Laptop</option>
                  <option>Monitor</option>
                </select>

                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Detail Product
                  </label>
                  <textarea
                    id="detai-product"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please enter detail product..."
                  ></textarea>
                </div>

                <div>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="user_avatar"
                  >
                    Upload Picture
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="upload-picture"
                    type="file"
                  />
                  <div
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="alt-picture"
                  >
                    Maximum file size 500mb with image size 256x256
                  </div>

                  <div>
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      id="stock"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                    />
                  </div>

                  <div className="mt-5 mb-5">
                    <button
                      type="button"
                      class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                    >
                      Create Poduct
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default CreateProduct;
