import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import PeopleIcon from "@mui/icons-material/People";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import EventIcon from "@mui/icons-material/Event";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "../StateProvider";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} text={user.displayName} />
      <SidebarRow Icon={PeopleIcon} text="Friends" />
      <SidebarRow Icon={FacebookIcon} text="Welcome" />
      <SidebarRow Icon={EmojiFlagsIcon} text="Pages" />
      <SidebarRow Icon={GroupWorkIcon} text="Groups" />
      <SidebarRow Icon={StorefrontIcon} text="Marketplace" />
      <SidebarRow Icon={OndemandVideoIcon} text="Watch" />
      <SidebarRow Icon={AccessTimeIcon} text="Memories" />
      <SidebarRow Icon={BookmarkBorderIcon} text="Save" />
      <SidebarRow Icon={EventIcon} text="Events" />
      <SidebarRow Icon={ChatIcon} text="Messenger" />
      <SidebarRow Icon={ExpandMoreIcon} text="See More" />
    </div>
  );
}

export default Sidebar;
