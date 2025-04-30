import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const navItems = ["home", "about", "services", "testimonials", "contact", "footer"];

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(33, 33, 33, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: 3,
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          py: { xs: 1, md: 2 },
        }}
      >
        {navItems.map((item, index) => (
          <Button
            key={index}
            component={Link}
            to={item}
            smooth={true}
            offset={-70}
            duration={500}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              color: hovered === item ? "primary.main" : "white",
              fontWeight: "medium",
              textTransform: "capitalize",
              position: "relative",
              "&:hover": {
                color: "primary.main",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "primary.main",
                transform: hovered === item ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
