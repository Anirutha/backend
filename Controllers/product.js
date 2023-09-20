import { client } from "../db.js";

export function getAllProducts(req){
    return client
    .db("products")
    .collection("amazon")
    .find(req.query)
    .toArray();
}

export function addProducts(data){
    return client
    .db("products")
    .collection("amazon")
    .insertOne(data)
  }
