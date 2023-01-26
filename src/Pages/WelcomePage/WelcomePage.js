import { Button, Grid } from "@mui/material";
import React from "react";
import loginHero from "./login-logo.svg";
import login from "./login-hero.svg";
import WelcomPageSignIn from '../../Components/WelcomPageSignIn/WelcomePageSignIn';
import "./WelcomePage.css";
function WelcomePage() {
  return (
    <div className="Welcome-page-start">
      <div className="Welcome-page-upper-half-left">
        <img src={loginHero} className="login-logo-image" alt="loginHero"></img>
        <Grid container className="Welcome-page-upper-half-right">
          <Grid item>
            <Button variant="text" className="Login-In-Option-Box">Join Now</Button>
          </Grid>
          <Grid item>
            <Button className="Sign-up-button" variant="outlined">
              Login In
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="Welcome-page-middle-part">
        <div className="Welcome-page-middle-part-left">
            <WelcomPageSignIn/>
        </div>
        <div className="Welcome-page-middle-part-right">
          <img src={login} className="center-image" alt="login"></img>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
