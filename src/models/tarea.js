const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TareaSchema = new Schema ({
    descripcion: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tareas', TareaSchema);