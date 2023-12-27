import axios from "axios";

export default class ProductService{
    getProduct(){
        return axios.get("https://fakestoreapi.com/products/")
    }

    getByProductName(productName){
        return axios.get("https://fakestoreapi.com/products/getByProductName?productName="+ productName)
    }
}