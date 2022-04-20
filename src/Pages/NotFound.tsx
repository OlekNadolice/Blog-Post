import { Typography, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ color: "maroon" }} variant="h4">
        404 Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
