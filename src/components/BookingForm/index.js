import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from '@chakra-ui/react'
import { Field, Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    date: Yup.date().required('Please, choose date'),
    guests: Yup.number().required('Please, choose guests').positive().integer().min(1, 'At least 1 guest').max(10, 'Max 10 guests'),
    occasion: Yup.string().required('Please, choose occasion'),
    time: Yup.string().required('Please, choose time')
})

const BookingForm = ({ availableTimes, updateTimes, submitForm, formData, availableOccasion }) => {


    const handleDateChange = (e, form) => {
        const value = e.target.value

        form.setFieldValue('date', value)

        updateTimes({ type: 'newTime', payload: new Date(value) })
    }

    return (
        <Formik
            initialValues={formData}
            onSubmit={(values) => {
                submitForm(values)
            }}
            validationSchema={validationSchema}
        >
            {
                ({
                    handleSubmit, isSubmitting
                }) => (
                    <Box as='form' onSubmit={handleSubmit} role="form">
                        <Field name="date">
                            {({ field, form }) => (
                                <FormControl my={4} isRequired isInvalid={form.errors.date && form.touched.date}>
                                    <FormLabel>Choose date</FormLabel>
                                    <Input type='date' {...field} onChange={(e) => { handleDateChange(e, form) }} />
                                    <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name="time">
                            {({ field, form }) => (
                                <FormControl my={4} isRequired isInvalid={form.errors.time && form.touched.time}>
                                    <FormLabel>Choose time</FormLabel>
                                    <Select {...field} placeholder='Select option'>
                                        {availableTimes.times.map((item, index) => {
                                            return (
                                                <option value={item} key={index}>{item}</option>
                                            )
                                        })}
                                    </Select>
                                    <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name="guests">
                            {({ field, form }) => (
                                <FormControl my={4} isRequired isInvalid={form.errors.guests && form.touched.guests}>
                                    <FormLabel>Choose guests</FormLabel>
                                    <NumberInput {...field} onChange={(e) => { form.setFieldValue(field.name, e) }}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.guests}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name="occasion">
                            {({ field, form }) => (
                                <FormControl my={4} isRequired isInvalid={form.errors.occasion && form.touched.occasion}>
                                    <FormLabel>Occasion</FormLabel>
                                    <Select {...field} placeholder='Select option'>
                                        {availableOccasion.map((item, index) => {
                                            return (<option key={index} value={item}>{item}</option>)
                                        })}
                                    </Select>
                                    <FormErrorMessage>{form.errors.occasion}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Button type='submit' variant='brandThick' w='full' my={4} isLoading={isSubmitting}>
                            Make a reservation
                        </Button>
                    </Box>
                )
            }

        </Formik>

    )
}

export default BookingForm