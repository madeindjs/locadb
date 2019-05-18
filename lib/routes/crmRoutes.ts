import {Request, Response} from "express";
import { ProductsController } from "../controllers/productsController";

export class Routes {
    public productsController: ProductsController = new ProductsController();

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        app.route('/products')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'TODO: Get products'
            })
        })
        .post(this.productsController.createProduct);

        app.route('/products/:id')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'TODO: Get product'
            })
        })
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'TODO: Update products'
            })
        })
        .delete((req: Request, res: Response) => {
            res.status(200).send({
                message: 'TODO: Destroy products'
            })
        })
    }
}