using TrabajoFinal.Entity;
using TrabajoFinal.Services;

namespace TrabajoFinal.Models
{
    public class ClientesModel(HttpClient _http, IConfiguration _configuration) : IClientesModel
    {
        readonly string _apiUrl = _configuration.GetSection("settings:UrlLocalApi").Value!;
        public List<Clientes>? GetClientes()
        {
            string url = _apiUrl + "clientes";
            var resp = _http.GetAsync(url).Result;
            if (resp.IsSuccessStatusCode)
                return resp.Content.ReadFromJsonAsync<List<Clientes>>().Result;

            return null;
        }
    }
}
