const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const pedidosRoutes = require('./routes/PedidosRoutes');
const administradoresRoutes = require('./routes/AdministadoresRoutes');
const clientesRoutes = require('./routes/ClientesRoutes');
const empleadosRoutes = require('./routes/EmpleadosRoutes');
const facturasRoutes = require('./routes/FacturasRoutes');
const inventarioRoutes = require('./routes/InventarioRoutes');
const mantenimientoRoutes = require('./routes/MantenimientoRoutes');
const maquinasRoutes = require('./routes/MaquinasRoutes');
const materialesRoutes = require('./routes/MaterialesRoutes');
const productosRoutes = require('./routes/ProductosRoutes');
const proveedoresRoutes = require('./routes/ProveedoresRoutes');
const proyectosRoutes = require('./routes/ProyectosRoutes');
const app = express();
 
// Conectar a la base de datos
connectDB();
 
// Middleware
app.use(bodyParser.json());
 
// Rutas
app.use('/api', pedidosRoutes);
app.use('/api', administradoresRoutes);
app.use('/api', clientesRoutes);
app.use('/api', empleadosRoutes);
app.use('/api', facturasRoutes);
app.use('/api', inventarioRoutes);
app.use('/api', mantenimientoRoutes);
app.use('/api', maquinasRoutes);
app.use('/api', materialesRoutes);
app.use('/api', productosRoutes);
app.use('/api', proveedoresRoutes);
app.use('/api', proyectosRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));