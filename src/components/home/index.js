import React from "react";
import useListData from "../../hooks/useListData";
function Index() {
  const { isLoading, isError, data } = useListData();

  const renderList = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Error...</div>;
    }
    if (data) {
      return data.map((item, index) => {
        return (
          <div className="bg-gray-800 capitalize text-white p-4 my-3 flex items-center" key={index}>
            <div className="bg-white w-2 h-2 rounded-full mr-2" />
            {item.title}
          </div>
        );
      });
    }
  };

  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">Posts</h1>
          <p className="text-3xl font-semibold mt-3">Posts for days</p>
        <div>{renderList()}</div>
        </div>
      </div>
    </>
  );
}

export default Index;
