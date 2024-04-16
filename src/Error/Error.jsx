import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div>
      <Helmet>
        <title>ARNA Error</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
                The page you are looking for does not exist.
              </Typography>
              <Link to={"/"}>
                <Button variant="contained">Back Home</Button>
              </Link>
            </Grid>
            <Grid xs={6}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
