const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type: 'string',
        required: true,
        trim: true,
        min: 3,
        max:20
    },
    lastName:{
        type: 'string',
        required: true,
        trim: true,
        min: 3,
        max:20
    },
    userName:{
        type: 'string',
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email:{
        type: 'string',
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password:{
        type: 'string',
        required: true

    },
    role:{
        type: 'string',
        enum: ['admin', 'user'],
        default: 'user'
    },
    contactNumber:{
        type: 'string',
    },
    profilePicture:{
        type: 'string',
    }
},
 {timestamps: true}
);

// userSchema.virtual('password').set(function(password){
//     this.hash_password = bcrypt.hashSync(password, 10); //here 10 is the salt
// });

// userSchema.methods = {
//     authenticate : function(password){
//         return bcrypt.compareSync(password,this.hash_password)
//     }
// }

module.exports = mongoose.model('User',userSchema);