import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Booking from '../page/Booking'
import { initialState, reducer } from "../page/Booking";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

test('Renders the BookingForm', () => {
    render(<Booking />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
})

const expected = ["17:00", "17:30", "18:00", "19:00", "19:30", "20:30", "22:30"];

test('InitialState function must returns the correct expected value', () => {
    expect(initialState).toStrictEqual({ "times": expected })
})

test('Reducer function must returns the correct expected value', () => {
    expect(reducer(initialState, { type: 'newTime', payload: new Date() })).toEqual(
        expect.objectContaining({
            times: expect.arrayContaining(expected)
        })
    )
})
