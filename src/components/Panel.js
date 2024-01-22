import React, { useEffect, useState } from "react";
import { GET } from "../services/request";
import Topbar from "./Common/Topbar";
import Drawer from "./Common/Drawer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Title from "./Title/Title";
import Footer from "./Common/Footer";
import Seats from "./Seats/Seats";

function Panel() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <main>
        <Topbar setOpenDrawer={setOpenDrawer} />
        <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Navigate to={"home"} />} />
          <Route path=":id/title" element={<Title />} />
          <Route path=":id/title/:count/seats" element={<Seats />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default Panel;
