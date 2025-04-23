const ClientesService = require('../services/clientesService');

class ClientesController {

    async createClientes(req, res) {
        try {
            const cliente = await ClientesService.createClientes(req.body);
            res.status(201).json(cliente);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getClientes(req, res) {
        try {
            const cliente = await ClientesService.getClientes(req.params.id);
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente no encontrado' });
            }
            res.json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getClientes(req, res) {
        try {
            const cliente = await ClientesService.getClientes();
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente no encontrado' });
            }
            res.json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateClientes(req, res) {
        try {
            const cliente = await ClientesService.updateClientes(req.params.id, req.body);
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente no encontrado'});
            }
            res.json(cliente);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteClientes(req, res) {
        try {
            const cliente = await ClientesService.deleteClientes(req.params.id);
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente no encontrado'});
            }
            res.json({ message: 'Cliente eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ClientesController();