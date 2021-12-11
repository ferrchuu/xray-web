import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Buttonn } from "../ButtonElements";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[500],
    "&:hover": {
      backgroundColor: cyan[50],
    },
  }));

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Radiología Domiciliaria</HeroH1>
        <HeroP>
          Llegamos hasta la comodidad te tu hogar para poder ir directo al
          medico con tu radiografía.
        </HeroP>
        <HeroBtnWrapper>
          <Buttonn
            to="llamar"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            variant="contained"
            as={ColorButton}
          >
            Ver ahora {hover ? <ArrowForward /> : <ArrowRight />}
          </Buttonn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
