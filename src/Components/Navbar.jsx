import React, { useState } from "react";
import Logo from "../Assets/logo.svg";
import "../App.css"
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Scrollspy from "react-scrollspy";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "home"
    },
    {
      text: "Features",
      icon: <InfoIcon />,
      id: "work"
    },
    {
      text: "Pricing",
      icon: <CommentRoundedIcon />,
      id: "pricing"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      id: "contact"
    }
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Scrollspy
          items={["home", "work", "pricing", "contact"]}
          currentClassName="active"
          className="scrollspy-links"
        >
          {menuOptions.map((item) => (
            <a className="links my-32" key={item.id} href={`#${item.id}`}>{item.text}</a>
          ))}
        </Scrollspy>
        <button id="login">
       <Link to="/login">  Login</Link>   
      </button>
        <button className="register">
       <Link to="/register"> Register</Link>   

        </button>
      </div>
      <div className="navbar-menu-container">
        <button id="surround"><HiOutlineBars3 onClick={() => setOpenMenu(true)} /></button>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />              
                </ListItemButton>
              </ListItem>
            ))}
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
