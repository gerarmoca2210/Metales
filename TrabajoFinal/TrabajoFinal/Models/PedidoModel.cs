using TrabajoFinal.Entity;
using TrabajoFinal.Services;

namespace TrabajoFinal.Models
{
    public class PedidoModel(HttpClient _http, IConfiguration _configuration) : IpedidoModel
    {
        readonly string _apiUrl = _configuration.GetSection("settings:UrlLocalApi").Value!;
        public List<Pedido>? GetProductos()
        {
            string url = _apiUrl + "pedidos/todos";
            var resp = _http.GetAsync(url).Result;

            if (resp.IsSuccessStatusCode)
                return resp.Content.ReadFromJsonAsync<List<Pedido>>().Result;

            return null;
        }
    }
}
