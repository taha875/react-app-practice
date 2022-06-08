import React, { useEffect } from "react";
import Modal from "./InputModal";
import { useSelector, useDispatch } from "react-redux";
export default function Index() {
  const task = useSelector((state) => state.todoList.todoList);

  console.log(task, "task");

  return (
    <>
      <div className="mx-auto container">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-800">To Do List</h1>
          <p className="text-3xl font-semibold mt-3">Keep Track of your work</p>
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
            {task?.map((item, index) => {
              console.log(item, "items");
              return (
                <>
                  {/* <p>{item.title}</p> */}
                  <div className="rounded-xl shadow-lg p-6">
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <p className="text-lg font-semibold mt-2">{item.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
