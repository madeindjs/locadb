import * as mongoose from 'mongoose';

import models from '../models';
import { Request, Response } from 'express';


export class ProductsController{

    public createProduct (req: Request, res: Response) {
        let newProduct = new models.Product(req.body);
        
        newProduct.save((err: Error, productSaved) => {
            if (err) {
                res.send(err)
            }else{
                res.json(productSaved)
            }
        })
    }


}
