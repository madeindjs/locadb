import * as mongoose from 'mongoose';

import Product from '../models/productModel';
import { Request, Response } from 'express';



export class ProductsController{

    public create (req: Request, res: Response) {
        let newProduct = new Product(req.body);
        
        newProduct.save((err: Error, productSaved) => {
            if (err) {
                res.send(err)
            }
            res.json(productSaved)
        })
    }

    public index (req: Request, res: Response) {           
        Product.find({}, (err, products) => {
            if(err){
                res.send(err);
            }
            res.json(products);
        });
    }

    public show (req: Request, res: Response) {           
        Product.findById(req.params.id, (err, products) => {
            if(err){
                res.send(err);
            }
            res.json(products);
        });
    }

    public update (req: Request, res: Response) {           
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, product) => {
            if(err){
                res.send(err);
            }
            res.json(product);
        });
    }

    public delete (req: Request, res: Response) {           
        Product.remove({ _id: req.params.id }, (err, product) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted product!'});
        });
    }
}
