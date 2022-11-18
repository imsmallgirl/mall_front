import axios from "axios";



export const getProducts = () => {
    const url = "./data/products.json"
    const res = axios(url)
    return res
}
