const professores = [
    {
        "id": "1",
        "nome": "Prof. Carlos",
        "idade": 40,
        "departamento": "Matemática",
        "turmas": [
        { "codigo": "9A", "disciplina": "MAT101", "alunos": ["João", "Maria", "Pedro"] },
        { "codigo": "10A", "disciplina": "MAT201", "alunos": ["Ana", "Luiz"] }
        ]
        },
        {
        "id": "2",
        "nome": "Prof. Ana",
        "idade": 35,
        "departamento": "História",
        "turmas": [
        { "codigo": "9A", "disciplina": "HIS101", "alunos": ["João", "Pedro"] },
        { "codigo": "10B", "disciplina": "HIS201", "alunos": ["Maria", "Carlos", "Luiza"] }
        ]
        },
        {
        "id": "3",
        "nome": "Prof. João",
        "idade": 50,
        "departamento": "Ciências",
        "turmas": [
        { "codigo": "9A", "disciplina": "CIE101", "alunos": ["João", "Maria"] },
        { "codigo": "9B", "disciplina": "CIE101", "alunos": ["Pedro", "Luiz"] }
        ]
        },
        {
            "id": "4",
            "nome": "Prof. Zeca",
            "idade": 53,
            "departamento": "Matemática",
            "turmas": [
            { "codigo": "9A", "disciplina": "MAT401", "alunos": ["Carlos", "Pedro"] },
            { "codigo": "10B", "disciplina": "MAT402", "alunos": ["Juca", "Ana", "Luiza"] }
            ]
        }
]

exports.obterTodos = (req, res) => {
    res.json(professores);
};

exports.obterPorId = (req, res) => {
    const { id } = req.params;
    const professor = professores.find((p) => p.id == id);
    if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado' });
    }
    res.json(professor);
};

exports.obterTurmas = (req, res) => {
    const { id } = req.params;
    const professor = professores.find((p) => p.id == id);
    if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado' });
    }
    res.json(professor.turmas);
};

exports.obterDepartamento = (req, res) => {
    const { departamento } = req.params;
    const professor = professores.filter((p) => p.departamento == departamento)

    if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado' })
    }
    res.json(professor);
};

exports.inserirTurma = (req, res) => {
    const { id } = req.params;
    const { codigo, disciplina, alunos } = req.body;

    const professor = professores.find((p) => p.id == id);
    const turma = { codigo: codigo, disciplina:disciplina, alunos:alunos  };
    professor.turmas.push(turma);
    res.status(201).json(professor.turmas);
};



exports.editar = (req, res) => {
    const { id } = req.params;
    const { nome, idade, departamento } = req.body;
    const professor = professores.find((p) => p.id == id);

    if (!professor) {
        return res.status(404).json({ error: 'ID não encontrado' });
    }

    if (nome){
    professor.nome = nome;
}
    if (idade){
    professor.idade = idade;
}
    if (departamento){
    professor.departamento = departamento;
}
    res.json(professor);
};

exports.remover = (req, res) => {
    const { id } = req.params;
    const index = professores.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Professor não encontrado' });
    }
    professores.splice(index, 1);
    res.status(204).send();
};