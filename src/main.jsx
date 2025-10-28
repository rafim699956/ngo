import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Media from "./pages/Media.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Home from "./pages/Home.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import Donation from "./pages/Donation.jsx";
import Team from "./pages/Team.jsx";
import Projects from "./pages/Projects.jsx";
import Events from "./pages/Events.jsx";
import Blog from "./pages/Blog.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/event" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
