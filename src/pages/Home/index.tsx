import React from "react";
import { Button, Divider, Grid } from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar";
import CustomMediaCard from "../../components/CustomMediaCard";
import frontendDevImage from "../../assets/images/frontend-dev.jpg";
import aboutUsImage from "../../assets/images/about-1-570x350.jpg";
import CustomOwlCarousel from "../../components/CustomOwlCarousel";
import "./style.css";

const Home = () => {
  const clients = [
    {
      name: "Anthony Hopkins",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, esse",
    },
    {
      name: "Anthony Hopkins",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, esse",
    },
    {
      name: "Anthony Hopkins",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, esse",
    },
    {
      name: "Anthony Hopkins",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, esse",
    },
  ];

  return (
    <div className="home">
      <CustomAppBar />
      <section className="banner banner-item-01">
        <div className="banner-text">
          <h4>Find your job today!</h4>
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
      </section>

      <section className="job-listing">
        <div className="job-listing-top">
          <span>Featured Jobs</span>
          <b>View More</b>
        </div>
        <Divider light={true} className="divider" />
        <Grid container rowSpacing={4} columnSpacing={14}>
          <Grid item xs={12} md={4}>
            <CustomMediaCard
              mediaImage={frontendDevImage}
              headLine="Reactjs Developer"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomMediaCard
              mediaImage={frontendDevImage}
              headLine="Reactjs Developer"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomMediaCard
              mediaImage={frontendDevImage}
              headLine="Reactjs Developer"
            />
          </Grid>
        </Grid>
      </section>

      <section className="about-us">
        <div className="about-us-top">
          <span>About Us</span>
        </div>
        <Divider light={true} className="divider" />
        <Grid container columnSpacing={12}>
          <Grid item xs={12} sm={6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            esse consequatur alias repellat in excepturi inventore ad asperiores
            tempora ipsa. Accusantium tenetur voluptate labore aperiam molestiae
            rerum excepturi minus in pariatur praesentium, corporis, aliquid
            dicta
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={aboutUsImage} alt="about us" width="100%" />
          </Grid>
        </Grid>
      </section>

      <section className="happy-clients">
        <div className="happy-clients-top">
          <span>Happy Clients</span>
        </div>
        <Divider light={true} className="divider" />
        <CustomOwlCarousel clients={clients} />
      </section>

      <section className="contact-us">
        <Grid container columnSpacing={6}>
          <Grid item xs={12} sm={6}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis amet elite author nulla.
            </h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button>Contact us</Button>
          </Grid>
        </Grid>
      </section>
      <hr />
      <footer>
        COPYRIGHT © 2020 COMPANY NAME - TEMPLATE BY: PHPJABBERS.COM
      </footer>
    </div>
  );
};

export default Home;
