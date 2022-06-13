import React, { useState } from "react";
import { useGetCharacterQuery, useAddCharacterMutation } from "../../app/Characters";
import AddUserModal from "../reusableUI/input/modal/Modal";

function UserData() {
  const { data: users, isLoading, error, isError, isSuccess } = useGetCharacterQuery();
  // const [addCharacter] = useGetCharacterQuery();
  // get add character mutation
  const [addCharacter] = useAddCharacterMutation();
  const [addUserModal, setAddUserModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const addUserHandler = () => {
    addCharacter(name, description);
    console.log(users);
  };
  const renderUser = () => {
    return (
      <>
        {users?.map((item, index) => {
          return (
            <>
              <div key={index} id={item.id} className="p-6 rounded-md shadow-lg flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full shadow-xl relative overflow-hidden">
                  <img src="https://source.unsplash.com/random/?city,night" className="w-full h-full" />
                </div>
                <p className="text-lg font-bold mt-2">{item.name}</p>
                <p className="text-base text-neutral-600 font-bold mt-2">{item.description}</p>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">Posts</h1>
          <div className="flex items-center justify-between mt-3">
            <p className="text-3xl font-semibold cursor-pointer">Users</p>
            <button onClick={() => setAddUserModal(true)} className="py-2 px-4 hover:bg-neutral-900 bg-neutral-800 rounded-md focus:outline-none text-white">
              Add User
            </button>
          </div>
        </div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">{renderUser()}</div>
      </div>
      {addUserModal && <AddUserModal heading="Add User" clickCross={() => setAddUserModal(false)} valueOne={name} changeOne={(e) => setName(e.target.value)} labelOne="Name" placeholderOne="John" valueTwo={description} changeTwo={(e) => setDescription(e.target.value)} labelTwo="Description" placeholderTwo="......" handleGetData={addUserHandler} buttonText="Add" />}
    </>
  );
}

export default UserData;
