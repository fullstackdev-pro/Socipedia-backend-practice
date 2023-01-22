import { Avatar, Container } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BsBoxSeam } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import Auth from "../Header/registration/Auth";
import Dialog from "@mui/material/Dialog";

function Navbar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <Auth />
        </Dialog>
      </div>
      <Container className="flex justify-between fixed bottom-0 bg-[#FFFFFF] py-2 z-[2] md:hidden">
        <Box className="text-[0.5rem] text-center mt-1">
          <MenuIcon className="text-[1.3rem]" /> <br /> Каталог
        </Box>
        <Box className="text-[0.5rem] text-center mt-1">
          {" "}
          <FavoriteBorderIcon className="text-[1.3rem]" /> <br /> Избранное
        </Box>
        <Box className="text-[0.5rem] text-center mt-1">
          {" "}
          <BsBoxSeam className="text-[1.3rem]" /> <br /> Заказы
        </Box>
        <Box className="text-[0.5rem] text-center mt-1">
          {" "}
          <SlBasket className="text-[1.3rem]" /> <br /> Корзина
        </Box>
        <Avatar
          alt=""
          src=""
          sx={{ width: 40, height: 40 }}
          onClick={handleClickOpen}
        />
      </Container>
    </>
  );
}

export default Navbar;
