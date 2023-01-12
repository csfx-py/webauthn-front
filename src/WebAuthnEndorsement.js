import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { motion } from "framer-motion";
import Safe from "./Assets/Safe-amico.svg";
import Hacker from "./Assets/Hacker-cuate.svg";
import Finger from "./Assets/Fingerprint-pana.svg";
import Forgot from "./Assets/Forgot password-bro.svg";
import { Link } from "react-router-dom";

export default function WebAuthnEndorsement() {
  return (
    <Container
      maxwidth="sm"
      component={motion.div}
      spacing={2}
      sx={{ py: 20 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            WebAuthn
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            Newer, better, stronger and faster way of authenticating users.
          </Typography>
          <Button
            component={Link}
            variant="contained"
            color="primary"
            sx={{ mr: 1, mt: 1 }}
            size="large"
            to="register"
          >
            Try it out
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mr: 1, mt: 1 }}
            size="large"
          >
            WebAuthn npm
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <img src={Safe} alt="Safe" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            The problem?
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            Passwords have been the primary method of authentication for many
            years, but they have several drawbacks. Passwords can be easily
            forgotten, they can be easily guessed or hacked, and they are not
            very secure. In recent years, there has been a growing awareness of
            the need for better authentication methods.
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" component="h5" gutterBottom>
            81% of data breaches involve weak or stolen passwords.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <img src={Hacker} alt="Hacker" />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 10,
            flexDirection: "column",
          }}
        >
          <img src={Finger} alt="Finger" />
          <Typography variant="h5" component="h5" gutterBottom>
            Because WebAuthn uses strong cryptographic methods to authenticate
            users, it makes it much more difficult for hackers to gain
            unauthorized access to an account. Additionally, because users can
            authenticate using biometrics or a security key, they no longer need
            to remember a password, which eliminates the risk of forgotten
            passwords.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            The solution?
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom>
            WebAuthn is a new W3C standard that enables browsers to communicate
            with authenticators using an API. This API allows users to register
            and authenticate using strong cryptographic credentials that are
            resistant to phishing, replay, and other attack vectors.
          </Typography>
          <img
            src={Forgot}
            alt="Forgot"
            style={{
              marginTop: "4rem",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
