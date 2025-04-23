using Microsoft.AspNetCore.Mvc;
using System.Numerics;
using TrabajoFinal.Entity;
using TrabajoFinal.Services;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TrabajoFinal.Controllers
{
    public class PedidoController(IpedidoModel _pedidosModel, IProductoModel _productoModel, IClientesModel _clientesModel) : Controller
    {
        [HttpGet]
        public IActionResult GetPedidos()
        {
            var response = _pedidosModel.GetProductos();

            if (response != null)
            {
                return View(response);
            }
            else
            {
                return View(new List<Pedido>());
            }
        }

        [HttpGet]
        public IActionResult Agregar()
        {
            var productos = _productoModel.GetProductos();
            ViewBag.Productos = productos;
            var clientes = _clientesModel.GetClientes();
            ViewBag.Clientes = clientes;
            return View();
        }

        [HttpGet]
        public IActionResult Editar(string id)
        {
            var pedido = _pedidosModel.GetPedido(id);
            var productos = _productoModel.GetProductos();
            ViewBag.Productos = productos;
            var clientes = _clientesModel.GetClientes();
            ViewBag.Clientes = clientes;
            return View(pedido);
        }

        [HttpPost]
        public IActionResult Agregar(Pedido pedidoEntity)
        {
            if (ModelState.IsValid)
            {
                var resp = _pedidosModel.RegistrarPedido(pedidoEntity);
                if (resp != null)
                {
                    return RedirectToAction("GetPedidos", "Pedido");
                }
                else
                {
                    ViewBag.MsjError = "Error al agregar";
                    return Agregar();
                }
            }
            else
            {
                ViewBag.MsjError = "Los datos no son validos";
                return Agregar();
            }

        }

        [HttpPost]
        public IActionResult Editar(string id, Pedido pedidoEntity)
        {
            if (ModelState.IsValid)
            {
                pedidoEntity._id = id;
                var resp = _pedidosModel.EditarPedido(pedidoEntity);
                if (resp != null)
                {
                    return RedirectToAction("GetPedidos", "Pedido");
                }
                else
                {
                    ViewBag.MsjError = "Error al agregar";
                    return View();
                }
            }
            else
            {
                ViewBag.MsjError = "Los datos no son validos";
                return View();
            }

        }

    }
}
