import React from "react";
import { Box } from "@mui/material";
import { BsInstagram, BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="bg-[#F9F4E2] mb-[3.75rem] pb-2 md:flex md:justify-between xl:px-[4.5rem] xl:pb-4">
      <Box className="flex justify-around mb-[20px] md:w-[50%] xl:flex xl:w-[40%]">
        <Box className="w-[30%]"></Box>
        <Box className="xl:flex">
          <Box className="flex justify-between mt-[42px]">
            <FaTelegram className="text-[1.5rem] text-[#0088cc] cursor-pointer xl:ml-4" />
            <BsInstagram className="text-[1.5rem] cursor-pointer xl:ml-4" />
            <FaFacebookSquare className="text-[1.5rem] text-[#1976D2] cursor-pointer xl:ml-4" />
            <BsWhatsapp className="text-[1.5rem] text-[#25D366] cursor-pointer xl:ml-4" />
          </Box>
          <Box className="mt-4 xl:mt-[42px]">
            <BsTelephone className="text-[1.5rem] xl:ml-4" /> 8 800 777 33 33
          </Box>
        </Box>
      </Box>
      <Box className="ml-8 md:mt-[53px] md:mr-8 xl:flex xl:mr-4">
        <Box className="flex justify-start">
          <Link
            to="#"
            className="no-underline text-[#414141] text-[0.75rem] mr-4 cursor-pointer xl:text-[0.9rem]"
          >
            О компании
          </Link>
          <Link
            to="#"
            className="no-underline text-[#414141] text-[0.75rem] mr-4 cursor-pointer xl:text-[0.9rem]"
          >
            Контакты
          </Link>
          <Link
            to="#"
            className="no-underline text-[#414141] text-[0.75rem] mr-4 cursor-pointer xl:text-[0.9rem]"
          >
            Статьи
          </Link>
          <Link
            to="#"
            className="no-underline text-[#414141] text-[0.75rem] cursor-pointer xl:text-[0.9rem]"
          >
            Вакансии
          </Link>
        </Box>
        <Box className="py-2 text-[0.75rem] text-[#414141] cursor-pointer xl:py-0 xl:pl-4 xl:text-[0.9rem]">
          Политика обработки персональных данных
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
