const express = require('express');
const router = express.Router();

const Tarea = require('../models/tarea');
const Nota = require('../models/nota');

router.get('/', async (req, res) => {
    const tareas = await Tarea.find();
    const notas = await Nota.find();
    res.render('index', {
        tareas: tareas,
        notas: notas
    });
});

router.post('/agregarTarea', async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save().catch(err => console.log(err));
    res.redirect('/')
});

router.post('/agregarNota', async (req, res) => {
    const nota = new Nota(req.body);
    await nota.save().catch(err => console.log(err));
    res.redirect('/')
});

router.get('/toggle/:id', async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    tarea.status = !tarea.status;
    await tarea.save();
    res.redirect('/');
});

//editar
router.get('/editarTarea/:id', async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    res.render('editTarea', {
        tarea: tarea
    });
});

router.get('/editarNota/:id', async (req, res) => {
    const { id } = req.params;
    const nota = await Nota.findById(id);
    res.render('editNota', {
        nota: nota
    });
});

router.post('/editarTarea/:id', async (req, res) => {
    const { id } = req.params;
    await Tarea.update({_id: id}, req.body);
    res.redirect('/');
});

router.post('/editarNota/:id', async (req, res) => {
    const { id } = req.params;
    await Nota.update({_id: id}, req.body);
    res.redirect('/');
});

//eliminar
router.get('/eliminarTarea/:id', async (req, res) => {
    const { id } = req.params;
    await Tarea.deleteOne({_id: id});
    res.redirect('/');
});

router.get('/eliminarNota/:id', async (req, res) => {
    const { id } = req.params;
    await Nota.deleteOne({_id: id});
    res.redirect('/');
});

module.exports = router;