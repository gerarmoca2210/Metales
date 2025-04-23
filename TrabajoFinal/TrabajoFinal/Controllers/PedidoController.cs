using Microsoft.AspNetCore.Mvc;
using System.Numerics;
using TrabajoFinal.Entity;
using TrabajoFinal.Services;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TrabajoFinal.Controllers
{
    public class PedidoController(IpedidoModel _pedidosModel) : Controller
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
            return View();
        }
    }
}
