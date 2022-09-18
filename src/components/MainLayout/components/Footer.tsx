import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener"
          underline="always"
        >
          My Store
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link
          color="inherit"
          href="https://rs.school"
          target="_blank"
          rel="noopener"
          underline="always"
        >
          Rolling Scopes School
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"By "}
        <Link
          color="inherit"
          href="https://github.com/mserykh"
          target="_blank"
          rel="noopener"
          underline="always"
        >
          mserykh
        </Link>
      </Typography>
    </>
  );
}

export default function Footer() {
  return (
    <Paper
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 2,
          }}
        >
          <Copyright />
        </Box>
      </Container>
    </Paper>
  );
}
