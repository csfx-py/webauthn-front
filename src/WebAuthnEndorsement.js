import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { motion } from "framer-motion";
import Safe from "./assets/Safe-amico.svg";

export default function WebAuthnEndorsement() {
  return (
    <Container
      maxwidth="sm"
      component={motion.div}
      container
      spacing={2}
      sx={{ py: 20 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            WebAuthn
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            Newer, better, stronger and faster way of authenticating users.
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <img src={Safe} alt="Safe" />
        </Grid>
      </Grid>
    </Container>
  );
}
