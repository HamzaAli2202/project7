import React from "react";
import { Card, CardContent } from "@mui/material";
export const ServiceItem = ({ item }) => {
  return (
    <Card sx={{ bgcolor: "purple", color: "white" }}>
      <CardContent>{item}</CardContent>
    </Card>
  );
};
