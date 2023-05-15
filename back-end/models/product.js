const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { APP_URL } = require('../config')

const productSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    About: {
      type: String,
      required: true,
      unique: true,
    },
    Genera: {
      type: String,
      required: true,
    },
    Link: {
      type: String,
      required: true,
    },
    MovieImg: {
      type: String,
      required: true,
      get: (image) => {
        return `${APP_URL}/${image.replace(/\\/g, '/')}`
      }
    },
    Thumbnail: {
      type: String,
      required: true,
      get: (image) => {
        return `${APP_URL}/${image.replace(/\\/g, '/')}`
      }
    },
    CardImg: {
      type: String,
      required: true,
      get: (image) => {
        return `${APP_URL}/${image.replace(/\\/g, '/')}`
      }
    },
  },
  { timestamps: true, toJSON: { getters: true } ,id:false }
);

module.exports = mongoose.model("Product", productSchema, "products");
