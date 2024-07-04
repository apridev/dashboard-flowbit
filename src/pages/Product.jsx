import React from "react";
import Layout from "../components/Layout";
import { Breadcrumb, Table } from "flowbite-react";
import { HiShoppingBag, HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Product = () => {

  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item icon={HiShoppingBag}>Ecommerce</Breadcrumb.Item>
          <Breadcrumb.Item href="/product">Product</Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white shadow dark:bg-gray-300 pt-1 pl-3 pb-4 mt-3 rounded-lg">
          <p className="mt-5 mb-2 text-base">Access Product : ....</p>
          <span className="text-2xl font-medium">Products</span>
        </div>

        {/* Create & Search */}
        <div className="flex justify-between mt-5">
          <div className="mt-auto">
            <button
              onClick={()=> navigate('/product/create-product')}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create Product
            </button>
          </div>
          <form>
            <div className="max-w-md mt-auto">
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search product..."
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events">
                  <HiOutlineSearch color="gray" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto mt-3">
          <Table
            striped
            className="table-auto border-spacing-0 border border-gray-200"
          >
            <Table.Head>
              <Table.HeadCell>No</Table.HeadCell>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>1</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-1">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-view"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>2</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-1">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-view"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>3</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-1">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-view"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>4</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Google Pixel Phone
                </Table.Cell>
                <Table.Cell>Gray</Table.Cell>
                <Table.Cell>Phone</Table.Cell>
                <Table.Cell>$799</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-1">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-view"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>5</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple Watch 5
                </Table.Cell>
                <Table.Cell>Red</Table.Cell>
                <Table.Cell>Wearables</Table.Cell>
                <Table.Cell>$999</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-1">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-view"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center rounded-lg custom-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-3">
        <div>
          <p className="text-sm">Total Product : 5</p>
          <p className="text-sm">Page: 1 of 5</p>
        </div>
        {/* Paginate */}
        <div className="flex mb-5 mt-2 items-center overflow-x-auto justify-center">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
