import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react'

const Rating = ({ rating, ...props }) => {
    return (
        <Box d="flex" alignItems="center" {...props}>
            {Array(5)
                .fill('')
                .map((_, i) => {

                    if (rating - i >= 1) {
                        return (
                            <StarIcon
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'brand.200' : 'gray.300'}
                            />
                        );
                    }
                    return <StarIcon key={i} style={{ marginLeft: '1' }} />;
                })}
        </Box>
    )
}

export default Rating