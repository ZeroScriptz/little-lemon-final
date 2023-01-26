import React, { useReducer, useState } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import BookingForm from '../../components/BookingForm'
import { fetchAPI, submitAPI } from '../../api/booking'
import { useNavigate } from 'react-router-dom';

export const initialState = {
    times: fetchAPI(new Date())
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'newTime':
            return { times: fetchAPI(action.payload) }
        default: throw new Error();

    }
}

const Booking = () => {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(reducer, initialState)
    const availableOccasion = ['Birthday', 'Anniversary'];
    const [formData, setFormData] = useState({
        date: '',
        guests: 1,
        occasion: '',
        time: ''
    });

    const handleFormSubmit = (values) => {

        const response = submitAPI(values);
        setTimeout(() => {
            if (response) {
                navigate('confirmation')
            }
        }, 1000);
    }

    return (
        <Box as='main'>
            <Container>
                <Box as='section' my={8}>
                    <Heading as='h1' textAlign='center' >Reservation</Heading>
                    <BookingForm
                        availableTimes={availableTimes}
                        updateTimes={dispatch}
                        submitForm={handleFormSubmit}
                        formData={formData}
                        availableOccasion={availableOccasion} />
                </Box>
            </Container>
        </Box >
    )
}

export default Booking