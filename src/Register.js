import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Party from "./Assets/cake.svg";
import { UserContext } from "./UserContext";

export default function Register() {
  const { register } = useContext(UserContext);

  const [support, setSupport] = useState(null);
  const [username, setUsername] = useState("");

  const [resData, setResData] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register(username);
    setResData(res);
  };

  useEffect(() => {
    if (window.PublicKeyCredential) {
      setSupport(true);
    } else {
      setSupport(false);
    }
  }, []);
  return (
    <Container
      maxwidth="sm"
      component={motion.div}
      spacing={2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          minWidth: "400px",
          minHeight: "400px",
          p: 4,
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          {support === true ? (
            <Grid
              container
              spacing={2}
              key={"supported"}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75 }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" component="h4" gutterBottom>
                  Your browser supports WebAuthn
                </Typography>
                <img src={Party} alt="Party" />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  p: 2,
                }}
              >
                <Typography variant="h4" component="h4" gutterBottom>
                  Register
                </Typography>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  fullWidth
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              key={"not-supported"}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Your browser does not support WebAuthn
              </Typography>
            </Grid>
          )}
        </AnimatePresence>
        <Typography variant="h4" component="h4" gutterBottom>
          {JSON.stringify(resData)}
        </Typography>
        {resData && <pre>{JSON.stringify(resData, null, 2)}</pre>}
      </Paper>
    </Container>
  );
}
