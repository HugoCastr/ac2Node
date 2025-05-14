const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.listarTodos);
router.get('/:id', professorController.buscarPorId);
router.get('/:id/turmas', professorController.listarTurmas);
router.put('/:id', professorController.atualizarProfessor);
router.post('/:id/turmas', professorController.adicionarTurma);
router.get('/departamento/:departamento', professorController.listarPorDepartamento);
router.delete('/:id', professorController.removerProfessor);

module.exports = router;