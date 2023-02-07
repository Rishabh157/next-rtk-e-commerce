import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ATMLoading = () => {
    return (
        <Stack spacing={1}>
            <Skeleton
                sx={{
                    borderRadius: '10px'
                }} variant="rectangular" width={416} height={729} />
        </Stack>
    )
}

export default ATMLoading;
