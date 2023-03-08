import React, { useState, useEffect } from 'react';
import MainCarousel from './Carousel.js';
import PaginatedItems from './Paginate'



export default function Home() {
    return (
        <>
            <MainCarousel styles />
            <PaginatedItems />
        </>
    );
}
