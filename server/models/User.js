const {Schema, model, objectId} = require("mongoose")

const User = new Schema({
    email: {type: String, required: true , unique: true},
    password: {type: String, required: true},
    diskSpace: {type: Number,default:1024**3*10},
    UsedSpace: {type:  Number, default:0},
    avatar: {type: String},
    files : [{type: objectId, ref:'file'}]
})

model.exports = model( 'User', User)