using System.Numerics;

namespace TrabajoFinal.Entity
{
    public class Pedido
    {
        public string? _id { get; set; }
        public string? cliente { get; set; }
        public string? productos { get; set; }
        public List<Producto>? ProductosConsulta { get; set; }

        public Clientes? NombreCliente { get; set; }
        public int cantidad { get; set; }
        public string? estado { get; set; }
    }
}
