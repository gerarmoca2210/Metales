const MaquinasService = require('../services/maquinasService');

class MaquinasController {

    async createMaquinas(req, res) {
        try {
            const maq = await MaquinasService.createMaquinas(req.body);
            res.status(201).json(maq);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMaquinas(req, res) {
        try {
            const maq = await MaquinasService.getMaquinas(req.params.id);
            if (!maq) {
                return res.status(404).json({ error: 'Maquina no encontrado' });
            }
            res.json(maq);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMaquinas(req, res) {
        try {
            const maq = await MaquinasService.getMaquinas();
            if (!maq) {
                return res.status(404).json({ error: 'Maquina no encontrado' });
            }
            res.json(maq);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateMaquinas(req, res) {
        try {
            const maq = await MaquinasService.updateMaquinas(req.params.id, req.body);
            if (!maq) {
                return res.status(404).json({ error: 'Maquina no encontrado'});
            }
            res.json(maq);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteMaquinas(req, res) {
        try {
            const maq = await MaquinasService.deleteMaquinas(req.params.id);
            if (!maq) {
                return res.status(404).json({ error: 'Maquina no encontrado'});
            }
            res.json({ message: 'Maquina eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new MaquinasController();