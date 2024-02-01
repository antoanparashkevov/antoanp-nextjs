import ApplicationModel from "../models/Application";

export type applicationItem = {
    firstName: string,
    lastName: string,
    email: string,
    message?: string,
    ticketCode: string,
    isExpired: boolean
}

export const create = (item: applicationItem) => {
    return ApplicationModel.create(item)
}