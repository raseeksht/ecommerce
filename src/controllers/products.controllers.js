import asyncHandler from "express-async-handler";
import { productModel } from "../models/products.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const addProduct = asyncHandler(async (req, res) => {
    const { name, description, image_urls, thumbnail_url, price, stock, discount } = req.body;
    const product = await productModel.create({
        name, description,
        image_urls, thumbnail_url,
        price, stock, discount
    })

    if (product) {
        res.json(new ApiResponse(201, "Product added successfully", product))
    } else {
        throw new ApiError(500, "Could not add product")
    }

})

const getProductById = asyncHandler(async (req, res) => {
    const productId = req.params.productId;
    const product = await productModel.findOne({ _id: productId })
    if (product) {
        res.json(new ApiResponse(200, "product fetched", product))
    } else {
        throw new ApiError(500, "failed to fetch")
    }
})

const updateProductById = asyncHandler(async (req, res) => {
    const productId = req.params.productId;
    const { name, description, image_urls, thumbnail_url, price, stock, discount } = req.body;
    const updates = {}

    if (name) updates.name = name;
    if (description) updates.description = description;
    if (image_urls) updates.image_urls = image_urls;
    if (thumbnail_url) updates.thumbnail_url = thumbnail_url;
    if (price) updates.price = price;
    if (stock) updates.stock = stock;
    if (discount) updates.discount = discount;


    if (Object.keys(updates).length == 0) {
        throw new ApiError(400, "Do you even want to update anything?")
    }

    const product = await productModel.findOneAndUpdate(
        { _id: productId },
        { $set: updates },
        { new: true }
    );
    if (!product) {
        throw new ApiError(404, "product not found")
    }
    res.json(new ApiResponse(200, "updated", product))

})

const deleteProductById = asyncHandler(async (req, res) => {
    const productId = req.params.productId;

    try {
        const del = await productModel.deleteOne({ _id: productId })
        res.json(new ApiResponse(200, del.deletedCount > 0 ? "deleted" : "failed to delete. does this product even exists?", del))
    }
    catch (err) {
        throw new ApiError(500, "Could not delete" + err.message)
    }


})



export { addProduct, getProductById, updateProductById, deleteProductById }