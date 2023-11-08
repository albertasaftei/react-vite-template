import { Box, Typography } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box>
        <Typography variant="h1" color="white">
          Home
        </Typography>
      </Box>
    ),
    errorElement: <NotFound />,
  },
]);
