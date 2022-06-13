import React, { useEffect } from "react";
import Modal from "./InputModal";
import { useSelector, useDispatch } from "react-redux";
import todoList, { removeTodo } from "../../features/todoList";
import UpdateModal from "./UpdateModal";
export default function Index() {
  const task = useSelector((state) => state.todoList.todoList);
  const [todoModal, setTodoModal] = React.useState(false);
  const [updateModal, setUpdateModal] = React.useState(false);
  const [indexValue, setIndexValue] = React.useState(null);
  const [prevTask, setPrevTask] = React.useState("");
  const [prevDescription, setPrevDescription] = React.useState("");
  const dispatch = useDispatch();

  const todoList = () => {
    return (
      <>
        {task?.map((item, index) => {
          return (
            <div key={index * Math.random() * 1000} className="group duration-700 ease-in-out rounded-xl hover:shadow-2xl border border-gray-400 hover:border-transparent p-6 relative">
              <div className="bg-black duration-500 ease-in-out  h-10 absolute -right-2 -top-2 w-10 group-hover:opacity-100 opacity-0 text-white rounded-full flex items-center justify-center cursor-pointer" onClick={() => dispatch(removeTodo(index))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-lg font-semibold mt-6">{item.description}</p>
              <div
                onClick={() => {
                  setIndexValue(index);
                  setPrevTask(item.title);
                  setPrevDescription(item.description);
                  setUpdateModal(true);
                }}
                className="group-hover:opacity-100 opacity-0 absolute right-6 bottom-6 w-6 flex items-center justify-center bg-gray-100 h-6 rounded-full hover:shadow-lg cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
              {updateModal === true && <UpdateModal prevTask={prevTask} prevDescription={prevDescription} index={indexValue} click={() => setUpdateModal(false)} />}
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">To Do List</h1>
          <div className="flex items-center justify-between mt-3">
            <p className="text-3xl font-semibold cursor-pointer">Keep Track of your work</p>
            <button onClick={() => setTodoModal(true)} className="py-2 px-4 hover:bg-neutral-900 bg-neutral-800 rounded-md focus:outline-none text-white">
              Add Task
            </button>
          </div>
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">{todoList()}</div>
        </div>
      </div>
      {todoModal === true && <Modal click={() => setTodoModal(false)} />}
    </>
  );
}
