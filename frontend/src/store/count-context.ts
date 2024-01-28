"use client";

import { createContext } from 'react';

const CountContext = createContext({
    isExpired: false,
    setIsExpired: (value: boolean): void => {}
});

export default CountContext;