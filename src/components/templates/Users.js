import React from "react";
import Sidebar from "../organisms/Sidebar";

const Users = () => {
    return (
        <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        {/* Contenido de la vista de usuarios */}
      </div>
    </div>
    )
};

export default Users;