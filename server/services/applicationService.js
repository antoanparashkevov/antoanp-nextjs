import Application from "../models/Application";

export const getAll = () => {
    return Application.find({});
}

export const getById = (id) => {
    return Application.find({_id: id});
}

export const create = (item) => {
    return Application.create(item);
}