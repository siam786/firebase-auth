import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {bookingId} = useParams();
    return (
        <div>
            <h2>Booking Page :{bookingId}</h2>
        </div>
    );
};

export default Booking;