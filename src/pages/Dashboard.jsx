import React from "react";
import Layout from "../components/Layout";
import { HiChartPie } from "react-icons/hi";
import { Breadcrumb, Card} from "flowbite-react";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item icon={HiChartPie}>Dashboard</Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white shadow p-5 mt-3">
        <div className="flex flex-wrap justify-between mt-2">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Card href="#" className="w-full h-30">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Admin
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-2xl">
                0
              </p>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Card href="#" className="w-full h-30">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                User
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-2xl">
                0
              </p>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Card href="#" className="w-full h-30">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Product
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-2xl">
                0
              </p>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Card href="#" className="w-full h-30">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Seles
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-2xl">
                0
              </p>
            </Card>
          </div>
        </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
