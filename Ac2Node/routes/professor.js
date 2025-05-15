const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.obterTodos);
router.get('/:id', professorController.obterPorId);
router.get('/:id/turmas', professorController.obterTurmas)
router.get('/departamento/:departamento', professorController.obterDepartamento)
router.post('/:id/turmas', professorController.inserirTurma);
router.put('/:id', professorController.editar);
router.delete('/:id', professorController.remover);


module.exports = router;