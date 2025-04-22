using Microsoft.AspNetCore.Mvc;
using System.Numerics;

namespace TrabajoFinal.Controllers
{
    [ResponseCache(NoStore = true, Duration = 0)]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
