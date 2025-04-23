using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;
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

        public Pedido? GetPedido(string _id) {
            string url = _apiUrl + "pedidos/"+ _id;
            var resp = _http.GetAsync(url).Result;
            if (resp.IsSuccessStatusCode)
                return resp.Content.ReadFromJsonAsync<Pedido>().Result;
            return null;
        }

        public Pedido? RegistrarPedido(Pedido pedidoEntity)
        {
            string url = _apiUrl + "pedidos";
            JsonContent body = JsonContent.Create(pedidoEntity);
            var resp = _http.PostAsync(url, body).Result;

            if (resp.IsSuccessStatusCode)
                return resp.Content.ReadFromJsonAsync<Pedido>().Result;

            return null;
        }

        public Pedido? EditarPedido(Pedido pedidoEntity)
        {
            string url = _apiUrl + "pedidos/"+pedidoEntity._id;
            JsonContent body = JsonContent.Create(pedidoEntity);
            var resp = _http.PutAsync(url, body).Result;

            if (resp.IsSuccessStatusCode)
                return resp.Content.ReadFromJsonAsync<Pedido>().Result;

            return null;
        }


    }
}
