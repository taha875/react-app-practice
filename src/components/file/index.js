import React from "react";
import { useGetCharacterQuery } from "../../app/RickandMorty";
function Index() {
  const { data: character, isLoading, error, isError, isSuccess } = useGetCharacterQuery();
  if (!character) {
    console.log("No data");
  } else {
    console.log(character);
  }
  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">Posts 2.0</h1>
          <p className="text-3xl font-semibold mt-3">Posts for days</p>
        </div>
      </div>
    </>
  );
}

export default Index;
