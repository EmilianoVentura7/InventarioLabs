// SidebarItem.jsx
import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import Icon from "../atoms/Icon";

function SidebarItem({ icon, count, to, children }) {
  return (
    <Link to={to} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        <Icon icon={icon} />
      </div>
      {children}
      {count && (
        <div className="grid place-items-center ml-auto justify-self-end">
          <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" style={{ opacity: 1 }}>
            <span>{count}</span>
          </div>
        </div>
      )}
    </Link>
  );
}

export default SidebarItem;
