import React from "react";
import { useGetCharacterQuery } from "../../app/RickandMorty";
function Index() {
  const { data: character, isLoading, error, isError, isSuccess } = useGetCharacterQuery();
  let dataOFCharacter = character;
  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Error...</div>;
    }
    if (isSuccess) {
      return (
        <>
          {dataOFCharacter?.results?.map((item) => {
            console.log(item.location.name);
            return (
              <p className="bg-gray-800  p-4 my-3 flex flex-col items-start" key={item.id}>
                <img src={item.image} className="w-full mb-4" />
                <p className="capitalize text-white"> {item.name}</p>
                <p className="capitalize text-white mt-1">
                  {" "}
                  {item.gender} -------- {item.species}
                </p>
                <p className="capitalize text-white mt-1">{item.location.name}</p>
              </p>
            );
          })}
        </>
      );
    }
  };
  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">Posts 2.0</h1>
          <p className="text-3xl font-semibold mt-3">Posts for days</p>
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">{renderData()}</div>
        </div>
      </div>
    </>
  );
}

export default Index;
