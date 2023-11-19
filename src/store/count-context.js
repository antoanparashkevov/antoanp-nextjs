import { createContext } from 'react';

const CountContext = createContext({
    isExpired: false,
    setIsExpired: (value) => {}
})

export default CountContext;