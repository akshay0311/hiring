import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";

type CustomTabProps = {
  tabItems: { id: string; label: string; child: any }[];
};

const CustomTab: React.FC<CustomTabProps> = (props) => {
  const [value, setValue] = useState("1");

  const { tabItems } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          centered
        >
          {tabItems.map((tabItem, index) => (
            <Tab key = {index} label={tabItem.label} value={tabItem.id} />
          ))}
        </TabList>
      </Box>
      {tabItems.map((tabItem, index) => <TabPanel value={tabItem.id}>{tabItem.child}</TabPanel> ) }
    </TabContext>
  );
};

export default CustomTab;
