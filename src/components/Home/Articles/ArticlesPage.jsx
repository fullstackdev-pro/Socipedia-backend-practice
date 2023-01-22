import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image1 from "../../../images/image 5.png";
import image2 from "../../../images/image 5 (1).png";
import image3 from "../../../images/image 5 (2).png";
import { Box } from "@mui/material";

export default function ArticlesPage() {
  return (
    <Box className="mt-16 pb-8 xl:px-[4.5rem]">
      <Typography variant="h4" className="font-bold mx-4">
        Статьи
      </Typography>
      <Box className="md:flex">
        <Card className="bg-[rgba(255, 255, 255, 1)] m-4 mt-6 md:m-4">
          <CardMedia sx={{ height: 140 }} image={image1} title="article 1" />
          <CardContent className="md:h-[13rem]">
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              className="font-bold"
            >
              Режим использования масок и перчаток на территории магазинов
            </Typography>
            <Typography
              className="text-[0.72rem] font-semibold xl:text-[1rem]"
              color="text.secondary"
            >
              Подробная информация о режимах использования масок и перчаток на
              территории магазинов "ЛЕНТА". Информация обновляется каждый будний
              день.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              color="success"
              className="ml-2 mb-2"
            >
              Подробнее
            </Button>
          </CardActions>
        </Card>
        <Card className="bg-[rgba(255, 255, 255, 1)] m-4 mt-6 md:m-4">
          <CardMedia sx={{ height: 140 }} image={image2} title="article 2" />
          <CardContent className="md:h-[13rem]">
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              className="font-bold"
            >
              Весеннее настроение для каждой
            </Typography>
            <Typography
              className="text-[0.72rem] font-semibold xl:text-[1rem]"
              color="text.secondary"
            >
              8 Марта – это не просто Международный женский день, это ещё день
              тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              color="success"
              className="ml-2 mb-2"
            >
              Подробнее
            </Button>
          </CardActions>
        </Card>
        <Card className="bg-[rgba(255, 255, 255, 1)] m-4 mt-6 md:m-4">
          <CardMedia sx={{ height: 140 }} image={image3} title="article 3" />
          <CardContent className="md:h-[13rem]">
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              className="font-bold"
            >
              ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!
            </Typography>
            <Typography
              className="text-[0.72rem] font-semibold xl:text-[1rem]"
              color="text.secondary"
            >
              Голосуйте за любимые категории, выбирайте категорию-победителя в
              мобильном приложении и получайте кешбэк 10% баллами в апреле!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              color="success"
              className="ml-2 mb-2"
            >
              Подробнее
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
