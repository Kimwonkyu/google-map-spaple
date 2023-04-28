import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { alpha } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar position={"static"}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant={"h5"}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography
            variant={"h6"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Explore new places
          </Typography>
          {/*
          <Autocomplete>
            */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.common.white, 0.25),
              },
              marginRight: 2,
              marginLeft: 0,
              width: "100%",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Box
              sx={{
                padding: (theme) => theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search..."
              sx={{
                color: "inherit",
                padding: (theme) => theme.spacing(1, 1, 1, 0),
                paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
              }}
            />
          </Box>
          {/*</Autocomplete>*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
