import { Typography } from "@mui/material";
import { Wrapper } from "./styles";

function NotFound() {
  return (
    <Wrapper>
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, this page was not found.</Typography>
    </Wrapper>
  );
}

export default NotFound;
