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
        .get(this.productsController.index)
        .post(this.productsController.create);

        app.route('/products/:id')
        .get(this.productsController.show)
        .put(this.productsController.update)
        .delete(this.productsController.delete)
    }
}