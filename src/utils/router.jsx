import { Box, Typography } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box>
        <Typography variant="h1">Home</Typography>
      </Box>
    ),
  },
]);
