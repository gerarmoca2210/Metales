using Microsoft.AspNetCore.Mvc;

namespace TrabajoFinal.Controllers
{
    public class ProductosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
