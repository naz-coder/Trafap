import React from "react";
import "./slide.css";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
const slide = () => {
  return (
    <div className="slide">
      <div className="title">
        <h2>Latest Traffic Updates</h2>
      </div>
      <div className="cards_top">
        <div className="card one">
          <div className="location">
            <h2>Nyanya - Abuja</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">10:00am</p>
          <p className="date_updated">06/10/2022</p>
          <p className="user_name">By Uche Felix</p>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card two">
          <div className="location">
            <h2>Rumuigbo - PH</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_low">Low</p>
          </div>
          <p className="time_updated">12:01pm</p>
          <p className="date_updated">06/10/2022</p>
          <p className="user_name">By Amara Ugwu</p>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card three">
          <div className="location">
            <h2>GSM Village - Lagos</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">06:12am</p>
          <p className="date_updated">06/10/2022</p>
          <p className="user_name">By Karima Abdul</p>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="cards_bottom">
        <div className="card four">
          <div className="location">
            <h2>Ikorodu - Lagos</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">11:45am</p>
          <p className="date_updated">06/10/2022</p>
          <p className="user_name">By Kelina Oghene</p>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card five">
          <div className="location">
            <h2>Lugbe - Abuja</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_mid">Medium</p>
          </div>
          <p className="time_updated">07:30am</p>
          <p className="date_updated">06/10/2022</p>
          <p className="user_name">By Naza Agada</p>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon className="comment_icon" />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card six">
          <div className="location">
            <h2>Lokoja - Kogi</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_low">Low</p>
          </div>
          <p className="time_updated">09:10pm</p>
          <p className="date_updated">06/10/2022</p>
          <p className="user_name">By Hajara Anthony</p>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slide;

/*CAROUSEL*/
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           height: 50,
//           pl: 2,
//           bgcolor: "background.default",
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: "block",
//                   maxWidth: 400,
//                   overflow: "hidden",
//                   width: "100%",
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;
