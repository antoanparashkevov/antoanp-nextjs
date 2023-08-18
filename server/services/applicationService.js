import Application from "../models/Application";

export const getById = async (id) => {
    return Application.find({_id: id})
}

export const create = async (item) => {
    return Application.create(item)
}