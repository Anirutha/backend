
import { client } from "../db.js";


export function getAllProducts(req){
    return client
    .db("b45wd")
    .collection("products")
    .find(req.query)
    .toArray();
}

export function addProducts(data){
    return client
    .db("b45wd")
    .collection("products")
    .insertOne(data)
  }
