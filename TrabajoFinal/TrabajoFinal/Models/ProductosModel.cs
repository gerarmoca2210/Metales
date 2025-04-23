using TrabajoFinal.Entity;
using TrabajoFinal.Services;

namespace TrabajoFinal.Models
{
    public class ProductosModel(HttpClient _http, IConfiguration _configuration) : IProductoModel
    {
        readonly string _apiUrl = _configuration.GetSection("settings:UrlLocalApi").Value!;
        public List<Producto>? GetProductos()
        {
            string url = _apiUrl + "productos";
            var resp = _http.GetAsync(url).Result;
            if (resp.IsSuccessStatusCode)
                return resp.Content.ReadFromJsonAsync<List<Producto>>().Result;

            return null;
        }
    }
}
