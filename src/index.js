import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import File from "./pages/file";
import { QueryClient, QueryClientProvider } from "react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <nav>
          <ul className="flex items-center justify-center gap-x-4 py-6">
            <li className="text-base font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base font-semibold">
              <Link to="/file">File</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="file" element={<File />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
