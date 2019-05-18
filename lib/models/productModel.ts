import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'A product must have be a name',
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;