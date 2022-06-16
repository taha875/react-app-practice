import React, { useEffect, useState } from "react";
import { useGetCharacterQuery, useAddCharacterMutation, useDeleteCharacterMutation, useUpdateCharacterMutation } from "../../app/Characters";
import Dropdown from "../reusableUI/dropdown/Dropdown";
import UserModal from "../reusableUI/input/modal/Modal";

function UserData() {
  const { data: users, isLoading, error, isError, isSuccess } = useGetCharacterQuery();
  const [addCharacter] = useAddCharacterMutation();
  const [deleteCharacter] = useDeleteCharacterMutation();
  const [updateCharacter] = useUpdateCharacterMutation();
  const [addUserModal, setAddUserModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState();
  const [updateUserModal, setUpdateUserModal] = useState(false);
  // const [idOfUserToUpdate, setIdOfUserToUpdate] = useState("");
  const addUserHandler = () => {
    addCharacter({
      body: {
        name,
        description,
      },
    });
  };
  const updateUserHandler = () => {
    updateCharacter({
      id: selected,
      body: {
        name,
        description,
      },
    });
  };
  const option = [
    {
      title: "user",
    },
    {
      title: "user2",
    },
    {
      title: "user3",
    },
    {
      title: "user4",
    },
  ];
  const renderUser = () => {
    return (
      <>
        {users?.map((item, index) => {
          setSelected(item.id);
          return (
            <>
              <div key={index} id={item.id} className="p-6 rounded-md shadow-lg flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full shadow-xl relative overflow-hidden">
                  <img src="https://source.unsplash.com/random/?city,night" className="w-full h-full" />
                </div>
                <p className="text-lg font-bold mt-2">{item.name}</p>
                <p className="text-base text-neutral-600 font-bold mt-2">{item.description}</p>
                <div>
                  <div className="mt-4">
                    <button onClick={() => setUpdateUserModal(true)} className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded text-indigo-700 px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 border-indigo-600 border  focus:ring-indigo-700">
                      Update
                    </button>
                    <button onClick={() => deleteCharacter({ id: item.id })} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                      Delete
                    </button>
                  </div>
                </div>
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
      {addUserModal && <UserModal heading="Add User" clickCross={() => setAddUserModal(false)} valueOne={name} changeOne={(e) => setName(e.target.value)} labelOne="Name" placeholderOne="John" valueTwo={description} changeTwo={(e) => setDescription(e.target.value)} labelTwo="Description" placeholderTwo="......" handleGetData={addUserHandler} buttonText="Add" />}

      {updateUserModal && <UserModal heading="Update User" clickCross={() => setUpdateUserModal(false)} valueOne={name} changeOne={(e) => setName(e.target.value)} labelOne="Name" placeholderOne="John" valueTwo={description} changeTwo={(e) => setDescription(e.target.value)} labelTwo="Description" placeholderTwo="......" handleGetData={updateUserHandler} buttonText="Update" />}
      {/* <Dropdown options={option} name={"Tags"} selected={selected} setSelected={setSelected} /> */}
    </>
  );
}

export default UserData;
