import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@mui/material";

function SidebarRow({ src, Icon, text }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}

      {Icon && <Icon />}
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarRow;
