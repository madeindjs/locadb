import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Hash } from 'crypto';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
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

UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err: Error, hash: Hash){
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

const Product = mongoose.model('User', UserSchema);

export default Product;