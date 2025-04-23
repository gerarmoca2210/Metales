const AdministradoresService = require('../services/administradoresService');

class AdministradoresController {

    async createAdministradores(req, res) {
        try {
            const administrador = await AdministradoresService.createAdministradores(req.body);
            res.status(201).json(administrador);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAdministradores(req, res) {
        try {
            const administrador = await AdministradoresService.getAdministradores(req.params.id);
            if (!administrador) {
                return res.status(404).json({ error: 'Administrador no encontrado' });
            }
            res.json(administrador);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAdministradores(req, res) {
        try {
            const administrador = await AdministradoresService.getAdministradores();
            if (!administrador) {
                return res.status(404).json({ error: 'Administrador no encontrado' });
            }
            res.json(administrador);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateAdministradores(req, res) {
        try {
            const administarador = await AdministradoresService.updateAdministradores(req.params.id, req.body);
            if (!administrador) {
                return res.status(404).json({ error: 'Administrador no encontrado'});
            }
            res.json(administarador);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteAdministradores(req, res) {
        try {
            const administrador = await AdministradoresService.deleteAdministradores(req.params.id);
            if (!administrador) {
                return res.status(404).json({ error: 'Administrador no encontrado'});
            }
            res.json({ message: 'Administrador eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new AdministradoresController();