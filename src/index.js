import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import File from "./pages/file";
import TodoList from "./components/todoList/Index";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { RickAndMorty } from "./app/RickandMorty";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      {/* <ApiProvider api={RickAndMorty}> */}
        <Provider store={store}>
        <BrowserRouter>
          <nav>
            <ul className="flex items-center justify-center gap-x-4 py-6">
              <li className="text-base font-semibold">
                <Link to="/">Post</Link>
              </li>
              <li className="text-base font-semibold">
                <Link to="/file">Post 2.0</Link>
              </li>
              <li className="text-base font-semibold">
                <Link to="/todoList">Todo List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="file" element={<File />} />
            <Route path="todoList" element={<TodoList />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
        </Provider>
      {/* </ApiProvider> */}
    </QueryClientProvider>
  </React.StrictMode>
);
