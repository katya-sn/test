import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        bgcolor: 'primary.main',
        color: 'primary.dark',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="div">
        Not Found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;