const EmpleadosService = require('../services/empleadosService');

class EmpleadosController {

    async createEmpleados(req, res) {
        try {
            const empleado = await EmpleadosService.createEmpleados(req.body);
            res.status(201).json(empleado);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getEmpleados(req, res) {
        try {
            const empleado = await EmpleadosService.getEmpleados(req.params.id);
            if (!empleado) {
                return res.status(404).json({ error: 'Empleado no encontrado' });
            }
            res.json(empleado);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getEmpleados(req, res) {
        try {
            const empleado = await EmpleadosService.getEmpleados();
            if (!empleado) {
                return res.status(404).json({ error: 'Empleado no encontrado' });
            }
            res.json(empleado);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateEmpleados(req, res) {
        try {
            const empleado = await EmpleadosService.updateEmpleados(req.params.id, req.body);
            if (!empleado) {
                return res.status(404).json({ error: 'Empleado no encontrado'});
            }
            res.json(empleado);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteEmpleados(req, res) {
        try {
            const empleado = await EmpleadosService.deleteEmpleados(req.params.id);
            if (!empleado) {
                return res.status(404).json({ error: 'Empleado no encontrado'});
            }
            res.json({ message: 'Empleado eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new EmpleadosController();