import React from "react";
import Input from "../reusableUI/input/input";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../features/todoList";
function InputModal() {
  const [task, setTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  const handleGetData = (e) => {
    console.log("dispatch working");
    dispatch(
      addTodo({
        title: task,
        description: description,
      })
    );
  };
  return (
    <>
      <div className=" w-full h-screen fixed  bg-black top-0 bg-opacity-70 ">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[700px]  bg-white rounded-xl p-12">
            <Input value={task} change={(e) => setTask(e.target.value)} customClass={`mb-4`} label={"Task"} placeholder={"To do ...."} />
            <Input value={description} change={(e) => setDescription(e.target.value)} label={"Description"} placeholder={"Add max of 5 words"} />
            <button onClick={handleGetData} className="bg-gray-400 w-full py-3 text-base mt-6 focus:outline-none font-semibold text-gray-600 rounded-md">
              Add To Do
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputModal;
