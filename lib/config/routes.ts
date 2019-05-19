import {Request, Response} from "express";
import { ProductsController } from "../controllers/productsController";
import { UsersController } from "../controllers/usersController";

export class Routes {
    public productsController: ProductsController = new ProductsController();
    public usersController: UsersController = new UsersController();

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Welcom to Locadex'
            })
        })

        // Products

        app.route('/products')
        .get(this.productsController.index)
        .post(this.productsController.create);

        app.route('/products/:id')
        .get(this.productsController.show)
        .put(this.productsController.update)
        .delete(this.productsController.delete)

        // Users

        app.route('/users')
        .get(this.usersController.index)
        .post(this.usersController.create);

        app.route('/users/:id')
        .get(this.usersController.show)
        .put(this.usersController.update)
        .delete(this.usersController.delete)
    }
}