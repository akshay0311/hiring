import React from "react";
import { Search, LocationOn } from "@mui/icons-material";
import { Button, Grid, IconButton, OutlinedInput, TextField } from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar";
import InputAdornment from "@mui/material/InputAdornment";
import "./style.css";
import CustomTab from "../../components/CustomTab";


const Jobs = () => {

  const tabItems = [{
    id : "1",
    label : "Jobs",
    child : <p>This is for the jobs</p>
  },
  {
    id : "2",
    label : "Recent Searches",
    child : <p>This is your recent searches</p>
  }]

  return (
    <div className="jobs">
      <CustomAppBar />
      <section className="banner banner-item-01">
        <div className="banner-text">
          <h4>Lorem ipsum dolor sit amet</h4>
          <h2>JOBS</h2>
        </div>
      </section>
      <section className="job-search">
        <Grid container rowSpacing={3} classes={{ root: "job-search-grid" }}>
          <Grid item xs={12} sm={5}>
            <OutlinedInput
              id="outlined-adornment-what"
              placeholder="  Job Title, Keyword or Company"
              size="small"
              startAdornment={
                <InputAdornment position="start">What</InputAdornment>
              } 
              endAdornment = {
                <InputAdornment position="end">
                  <IconButton>
                    <Search/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <OutlinedInput
              id="outlined-adornment-where"
              placeholder="  City, State or Pincode"
              size="small"
              startAdornment={
                <InputAdornment position="start">Where</InputAdornment>
              }
              endAdornment = {
                <InputAdornment position="end">
                  <IconButton>
                    <LocationOn/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" id = "find-jobs-btn">Find Jobs</Button>
          </Grid>
        </Grid>
      </section>
      <section>
        <CustomTab tabItems={tabItems}/>
      </section>
    </div>
  );
};

export default Jobs;
