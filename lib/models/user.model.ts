import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Hash } from 'crypto';

import User from './user.interface';

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

// UserSchema.statics.authenticate = function (email: String, password: String, callback: CallableFunction) {
//     User.findOne({ email: email })
//     .exec(function (err: Error, user) {
//         if (err) {
//             return callback(err)
//         } else if (!user) {
//             err = new Error('User not found.');
//             // err.status = 401;
//             return callback(err);
//         }
//         bcrypt.compare(password, user.password, function (_compareError: Error, result: Boolean) {
//             if (result === true) {
//                 return callback(null, user);
//             } else {
//                 return callback();
//             }
//         })
//     });
//   }

const User = mongoose.model<User & mongoose.Document>('User', UserSchema);

export {UserSchema};

export default User;