import * as mongoose from 'mongoose';

import Product from './productModel';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
};

const models = { Product };

export { connectDb };

export default models;