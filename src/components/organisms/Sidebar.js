import React from "react";
import SidebarItem from "../molecules/SidebarItem";

function Sidebar() {
  return (
    <div className="relative flex flex-col bg-clip-border bg-blue-700 text-gray-700 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">
          Laboratorio Maker
        </h5>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
        <SidebarItem icon="home" to="/home">Home</SidebarItem> 
        <SidebarItem icon="articles" to="/view-article-maker">Artículos</SidebarItem>
        <SidebarItem icon="users" to="/users">Usuarios</SidebarItem>
        <SidebarItem icon="prestamos" to="">Prestamos</SidebarItem>
        <SidebarItem icon="log_out" to="/">Cerrar Sesión</SidebarItem>
      </nav>
    </div>
  );
}

export default Sidebar;
