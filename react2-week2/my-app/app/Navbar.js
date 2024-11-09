"use client";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:740px)");

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        <ListItem button onClick={handleDrawerToggle}>
          <Link href="/accordion" passHref>
            <ListItemText primary="accordion" />
          </Link>
        </ListItem>
        <ListItem button onClick={handleDrawerToggle}>
          <Link href="/counter" passHref>
            <ListItemText primary="counter" />
          </Link>
        </ListItem>
        <ListItem button onClick={handleDrawerToggle}>
          <Link href="/reducer" passHref>
            <ListItemText primary="reducer" />
          </Link>
        </ListItem>
        <ListItem button onClick={handleDrawerToggle}>
          <Link href="/todolist" passHref>
            <ListItemText primary="todo-list" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ "&:hover": { textDecoration: "underline" }, flexGrow: 1 }}
        >
          <Link href="/" passHref>
            ReactApp
          </Link>
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <>
            <Link href="/accordion" passHref>
              <Button color="inherit" className="hover:bg-sky-400">
                accordion
              </Button>
            </Link>
            <Link href="/reducer" passHref>
              <Button color="inherit" className="hover:bg-sky-400">
               reducer
              </Button>
            </Link>
            <Link href="/counter" passHref>
              <Button color="inherit" className="hover:bg-sky-400">
                counter
              </Button>
            </Link>
            <Link href="/todolist" passHref>
              <Button color="inherit" className="hover:bg-sky-400">
                todo-list
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;