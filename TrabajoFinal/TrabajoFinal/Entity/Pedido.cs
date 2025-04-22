using System.Numerics;

namespace TrabajoFinal.Entity
{
    public class Pedido
    {
        public int Id { get; set; }
        public int cliente_id { get; set; }
        public int producto_id { get; set; }
        public List<Producto>? ProductosConsulta { get; set; }
        public int cantidad { get; set; }
        public string? estado { get; set; }
    }

    public class PedidoResponse
    {
        public PedidoResponse()
        {
            Codigo = "00";
            Mensaje = "";
            Dato = null;
            Datos = null;
        }

        public string Codigo { get; set; }
        public string Mensaje { get; set; }
        public Pedido? Dato { get; set; }
        public List<Pedido>? Datos { get; set; }
    }

}
