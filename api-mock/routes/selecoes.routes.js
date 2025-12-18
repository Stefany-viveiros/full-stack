import express from "express";
import conexao from "../infra/conexao.js";

const router = express.Router();

// Buscar todas as seleções 
router.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });
});

// Buscando por ID
router.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    });
});

// Deletando registro
router.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from selecoes where id=?";

    conexao.query(sql, id, () => {
        res.json({ menssagem: "Deletando com sucesso"});
    });
})

router.put('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const selecao = req.body;
    const sql = "update selecoes set ? where id=?";

    conexao.query(sql, [selecao, id], () => {
        res.json({mensagem: "Atualizando com sucesso!" });
    });
});
export default router;