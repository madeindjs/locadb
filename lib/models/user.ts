import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: 'An user must have be an email',
    },
    password: {
        type: String,
        required: 'An user must have be a password',
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
})

// UserSchema.methods.speak = function () {
//     var greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }

const Product = mongoose.model('User', UserSchema);

export default Product;