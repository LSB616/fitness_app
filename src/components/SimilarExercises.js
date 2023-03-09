import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
      <Typography variant='h3' textTransform="capitalize" mb={5} mt={6}>Exercises That Target The Same <span style={{color: '#ff2625'}}>Muscle Group</span></Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
      {targetMuscleExercises.length ? <HorizontalScollbar data={targetMuscleExercises}/> : <Loader />}
      </Stack>
      <Typography variant='h3' textTransform="capitalize" mb={5} mt={5}>Exercises That Target The Same <span style={{color: '#ff2625'}}>Equipment</span></Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
      {equipmentExercises.length ? <HorizontalScollbar data={equipmentExercises}/> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises