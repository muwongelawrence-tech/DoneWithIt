import Client from "./client";

const getListings = () => {
    Client.get("/products");
};


export default {
    getListings,
};