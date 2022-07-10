import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
