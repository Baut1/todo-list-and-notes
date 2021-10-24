const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotaSchema = new Schema ({
    titulo: String,
    descripcion: String
});

module.exports = mongoose.model('notas', NotaSchema);