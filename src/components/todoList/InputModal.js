import React from "react";
import Input from "../reusableUI/input/input";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../features/todoList";
import Cross from "../../svg/cross";
function InputModal({ click }) {
  const [task, setTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  const handleGetData = (e) => {
    dispatch(
      addTodo({
        title: task,
        description: description,
      })
    );
    click();
  };
  return (
    <>
      <div className=" w-full h-screen fixed  bg-black top-0 bg-opacity-70 ">
        <div className="w-12 h-12 bg-white hover:bg-black hover:text-white text-black rounded-full absolute right-10 top-10 flex items-center justify-center cursor-pointer group" onClick={click}>
          <Cross customClass={"w-6 group-hover:text-white text-black"} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[700px]  bg-white rounded-xl p-12">
            <Input value={task} change={(e) => setTask(e.target.value)} customClass={`mb-4`} label={"Task"} placeholder={"To do ...."} />
            <Input value={description} change={(e) => setDescription(e.target.value)} label={"Description"} placeholder={"Add max of 5 words"} />
            <button onClick={handleGetData} className="hover:bg-neutral-900 bg-neutral-800 w-full py-3 text-base mt-6 focus:outline-none font-semibold text-white rounded-md">
              Add To Do
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputModal;
