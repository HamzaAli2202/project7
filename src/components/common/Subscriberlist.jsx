import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";

export const Subscriberlist = () => {
  const [data, setData] = useState([
    "Shahrukh Mulla",
    "Mohammad Aziz",
    "Imtiyaz Shaikh",
    "Wasim Tamboli",
    "Prakash Prajapat",
  ]);
  return (
    <List>
      {data.map((item) => (
        <React.Fragment>
          <ListItem>{item}</ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};
