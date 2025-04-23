const ProductosService = require('../services/productosService');

class ProductosController {

    async createProductos(req, res) {
        try {
            const producto = await ProductosService.createProductos(req.body);
            res.status(201).json(producto);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProducto(req, res) {
        try {
            const producto = await ProductosService.getProductos(req.params.id);
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(producto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProductos(req, res) {
        try {
            const producto = await ProductosService.getProductos();
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(producto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateProductos(req, res) {
        try {
            const producto = await ProductosService.updateProductos(req.params.id, req.body);
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado'});
            }
            res.json(producto);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteProductos(req, res) {
        try {
            const producto = await ProductosService.deleteProductos(req.params.id);
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado'});
            }
            res.json({ message: 'Producto eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProductosController();