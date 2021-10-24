const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

//conectando a la base de datos
mongoose.connect('mongodb+srv://admin:vfPznlKEl8YQhF83@cluster0.6ius8.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));

//importando rutas
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//rutas
app.use('/', indexRoutes);

//iniciando server
app.listen(app.get('port'), () => {
    console.log(`Server en puerto ${app.get('port')}`);
});
