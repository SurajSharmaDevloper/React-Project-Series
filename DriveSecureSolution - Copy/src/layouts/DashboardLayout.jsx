import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";


export default function DashboardLayout() {
  return (
    <div className="min-h-screen w-full flex bg-light flex-col bg-light">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full shadow z-50">
        <Navbar />
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="absolute top-[97.6px] left-64 w-[calc(100%-16rem)] bg-light h-[calc(100%-97.6px)] max-[1070px]:left-0 max-[1070px]:w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
