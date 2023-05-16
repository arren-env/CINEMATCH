const Product = require('../models/product');
const multer = require('multer');
const path = require('path');
const Joi = require('joi');
const fs = require('fs');
const CustomErrorHandler = require('../services/customErrorHandler');
const admin = require('../middlewares/admin');
const User = require('../models/user');

//multer setup for disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName)
  }
});

//multer image setup
const upload = multer({ storage, limits: { fileSize: 1000000 * 5 } }).fields([
  { name: 'MovieImg', maxCount: 1 },
  { name: 'Thumbnail', maxCount: 1 },
  { name: 'CardImg', maxCount: 1 }
]);

//validating req using joi
const productSchema = Joi.object({
  Title: Joi.string().required(),
  Price: Joi.number().required(),
  About: Joi.string().required(),
  Genera: Joi.string().required(),
  Link: Joi.string().required(),
  Duration: Joi.string().required(),
});

const productController = {
  //inserting data 
  async store(req, res, next) {
    admin(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      upload(req, res, async (err) => {
        if (err) {
          return next(CustomErrorHandler.serverError(err.message));
        }

        const { error } = productSchema.validate(req.body);
        if (error) {
          // If validation fails, delete the uploaded images
          req.files && Object.values(req.files).forEach(file => {
            fs.unlinkSync(file[0].path);
          });
          return next(CustomErrorHandler.serverError(error.message));
        }

        const { Title, Price, About, Genera, Link, Duration } = req.body;
        const product = new Product({
          Title,
          Price,
          About,
          Genera,
          Link,
          Duration,
          MovieImg: req.files['MovieImg'][0].path,
          Thumbnail: req.files['Thumbnail'][0].path,
          CardImg: req.files['CardImg'][0].path
        });

        try {
          const savedProduct = await product.save();
          res.json(savedProduct);
        } catch (err) {
          // If save operation fails, delete the uploaded images
          req.files && Object.values(req.files).forEach(file => {
            fs.unlinkSync(file[0].path);
          });
          return next(err);
        }
      });
    });
  },

  //updating data
  async update(req, res, next) {
    const productId = req.params.id;

    admin(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      upload(req, res, async (err) => {
        if (err) {
          return next(CustomErrorHandler.serverError(err.message));
        }

        const { error } = productSchema.validate(req.body);
        if (error) {
          // If validation fails, delete the uploaded images
          req.files && Object.values(req.files).forEach(file => {
            fs.unlinkSync(file[0].path);
          });
          return next(CustomErrorHandler.serverError(error.message));
        }

        try {
          const product = await Product.findById(productId);
          if (!product) {
            return next(CustomErrorHandler.notFound('Product not found'));
          }

          const { Title, Price, About, Genera, Link } = req.body;
          product.Title = Title;
          product.Price = Price;
          product.About = About;
          product.Genera = Genera;
          product.Link = Link;
          product.Duration = Duration

          if (req.files['MovieImg']) {
            fs.unlinkSync(product.MovieImg);
            product.MovieImg = req.files['MovieImg'][0].path;
          }

          if (req.files['Thumbnail']) {
            fs.unlinkSync(product.Thumbnail);
            product.Thumbnail = req.files['Thumbnail'][0].path;
          }

          if (req.files['CardImg']) {
            fs.unlinkSync(product.CardImg);
            product.CardImg = req.files['CardImg'][0].path;
          }

          const savedProduct = await product.save();
          res.json(savedProduct);
        } catch (err) {
          // If save operation fails, delete the uploaded images
          req.files && Object.values(req.files).forEach(file => {
            fs.unlinkSync(file[0].path);
          });
          return next(err);
        }
      });
    });
  },

  //deleting data
  async delete(req, res, next) {
    const productId = req.params.id;

    try {
      const product = await Product.findByIdAndRemove(productId);
      if (!product) {
        return next(CustomErrorHandler.notFound('Product not found'));
      }

      // Delete the images associated with the product
      fs.unlinkSync(product.MovieImg.replace(`${APP_URL}/`, ''));
      fs.unlinkSync(product.Thumbnail.replace(`${APP_URL}/`, ''));
      fs.unlinkSync(product.CardImg.replace(`${APP_URL}/`, ''));

      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      return next(err);
    }
  },

  //displaying all data
  async index(req, res, next) {
    let document;

    try {
      document = await Product.find().select('-updatedAt -__v').sort({ _id: -1 });
    } catch (error) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  },

  //displaying single data 
  async show(req, res, next) {
    let document;

    try {
      document = await Product.findById({ _id: req.params.id }).select('-updatedAt -__v');
    } catch (error) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  }
};

module.exports = productController;
