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
        return <div key={index}>{item.title}</div>;
      });
    }
  };

  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">Inner File PAge</h1>
          <p className="text-3xl font-semibold mt-3">Posts for days</p>
        </div>
        <div>{renderList()}</div>
      </div>
    </>
  );
}

export default Index;
