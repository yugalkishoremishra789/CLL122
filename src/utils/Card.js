import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "./card.css"

const CardImg = (props) => {
  return (
    <div className="card__item">
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 1410,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 150 }}>
          <img src={props.photo} loading="lazy" alt="" fill = "cover" />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
            {props.title}
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
          >
            <Link
              overlay
              underline="none"
              href={props.link}
              sx={{ color: "text.tertiary", fontSize:"16px" }}
            >
              {props.text}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default CardImg;
