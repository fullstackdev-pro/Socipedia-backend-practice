import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BsBoxSeam } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import Dialog from "@mui/material/Dialog";
import Auth from "./registration/Auth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header(props) {

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const searchPost = async () => {
    if (search) {
      const allProducts = await axios({
        method: "get",
        url: `http://localhost:3001/api/goods/${search}/search`,
      });

      navigate("/searchResult");
    } else {

    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <Auth />
        </Dialog>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="static xl:px-[5rem]" color="inherit">
          <Toolbar className="flex ">
            <Container className="flex ">
              <Toolbar>
                <Search
                  className="border-[1px] border-[#70C05B]"
                  value={search}
                  onKeyUp={handleKeyPress}
                  onChange={(e) => setSearch(e.target.value)}
                >
                  <SearchIconWrapper className="h-[100%] absolute pointer-events-none flex items-center justify-center">
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Toolbar>
            </Container>
            <Container className="hidden md:flex md:justify-between md:w-[70%] mx-0">
              <Box className="text-[0.5rem] md:text-[0.75rem] md:pr-2 text-center mt-1 cursor-pointer">
                <MenuIcon className="text-[1.3rem]" /> <br /> Каталог
              </Box>
              <Box className="text-[0.5rem] md:text-[0.75rem] md:pr-2 text-center mt-1 cursor-pointer">
                {" "}
                <FavoriteBorderIcon className="text-[1.3rem]" /> <br />{" "}
                Избранное
              </Box>
              <Box className="text-[0.5rem] md:text-[0.75rem] md:pr-2 text-center mt-1 cursor-pointer">
                {" "}
                <BsBoxSeam className="text-[1.3rem]" /> <br /> Заказы
              </Box>
              <Box className="text-[0.5rem] md:text-[0.75rem] md:pr-2 text-center mt-1 cursor-pointer">
                {" "}
                <SlBasket className="text-[1.3rem]" /> <br /> Корзина
              </Box>
              <Avatar
                className="cursor-pointer"
                alt=""
                src=""
                sx={{ width: 40, height: 40 }}
                onClick={handleClickOpen}
              />
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
