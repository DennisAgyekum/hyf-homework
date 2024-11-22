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
    Box,
} from "@mui/material";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:740px)");
    const router = useRouter();
    const currentPath = router.asPath; 

    const handleDrawerToggle = useCallback(() => {
        setDrawerOpen((prev) => !prev);
    }, []);

    const navLinkItems = [
        { name: 'Home', url: '/' },
        { name: 'Astronomy Photo', url: '/src/nasaPic' },
        { name: 'Blogs', url: '/src/blogs' },
        { name: 'Mars Rover', url: '/src/marsRover' },
        { name: 'Epic Image', url: '/src/epic' },
        { name: 'Sign In', url: '/src/form' },
    ];

    const drawer = (
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: 250, backgroundColor: '#f5f5f5', height: '100%', color: '#333' }}>
                {navLinkItems.map((item) => (
                    <ListItem button key={item.name} onClick={handleDrawerToggle} sx={{ padding: '15px 20px' }}>
                        <Link href={item.url} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemText
                                primary={item.name}
                                sx={{
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    textDecoration: currentPath === item.url ? 'underline' : 'none', 
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: '#f0f0f0', padding: '0 20px', color: '#333' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        color: '#333',
                        "&:hover": { color: '#007acc' },
                    }}
                >
                    <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>ReactApp</Link>
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        {drawer}
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navLinkItems.map((link) => (
                            <Link href={link.url} passHref key={link.name} style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: '#333',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        textDecoration: currentPath === link.url ? 'underline' : 'none', 
                                        "&:hover": {
                                            color: '#007acc',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;