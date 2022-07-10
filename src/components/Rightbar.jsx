import React from "react";
import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https:/source.unsplash.com/random" />
          <Avatar alt="Travis Howard" src="https:/source.unsplash.com/random" />
          <Avatar alt="Cindy Baker" src="https:/source.unsplash.com/random" />
          <Avatar alt="Agnes Walker" src="https:/source.unsplash.com/random" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Travis Howard" src="https:/source.unsplash.com/random" />
          <Avatar alt="Cindy Baker" src="https:/source.unsplash.com/random" />
          <Avatar alt="Agnes Walker" src="https:/source.unsplash.com/random" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              alt=""
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://material-ui.com/static/images/image-list/camera.jpg"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
