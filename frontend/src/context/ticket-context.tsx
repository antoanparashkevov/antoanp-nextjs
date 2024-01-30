"use client";

import React, { createContext, useState } from "react";

export type ticketContext = {
    activeTicket: string,
    updateTicket: (ticket: string) => void,
}

//PascalCase for context name
export const TicketContext = createContext<ticketContext>({
    activeTicket: "standard",
    updateTicket: () => {}
});

export const TicketContextProvider: React.FC<{children: Readonly<React.ReactNode>}> = ({ children }) => {
    const [activeTicket, setActiveTicket] = useState<string>("standard");

    const updateTicket = (ticket: string) => {
        setActiveTicket(ticket);
    }

    return (
        <TicketContext.Provider value={{ activeTicket, updateTicket }}>
            {children}
        </TicketContext.Provider>
    )
}