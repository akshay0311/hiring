import React from "react";
import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import "./style.css";

const JobLeftPanel = () => {

  const jobData = [
    {
      role: "React.js Developer",
      company: "Audax Labs",
      location: "Noida",
    },
    {
      role: "React.js Developer",
      company: "Audax Labs",
      location: "Noida",
    },
  ];

  return (
    <Grid container classes = {{root : "job-area-root"}}>
      <Grid item xs={6}>
        {jobData.map((job) => (
          <JobCard jobData={job} />
        ))}
      </Grid>
    </Grid>
  );
};

export default JobLeftPanel;
