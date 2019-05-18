import * as mongoose from 'mongoose';

import Product from './product';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
};

const models = { Product };

export { connectDb };

export default models;