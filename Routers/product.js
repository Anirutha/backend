import express from "express";
import { getAllProducts,addProducts} from "../Controllers/product.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
     const products = await getAllProducts(req);
    if (products.length <= 0) {
      console.log(products)
      res.status(400).json({ data: "User Not found" });
      return;
    }
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const addProduct = req.body;
    if (!addProduct) {
      return res.status(400).json({ data: "No details provided" });
    }
    const result = await addProducts(addProduct);
    res
      .status(200)
      .json({ data: { result: result, message: "Added Sucessfully" } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});
export const productsRouter = router;