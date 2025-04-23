using TrabajoFinal.Entity;

namespace TrabajoFinal.Services
{
    public interface IpedidoModel
    {
        List<Pedido>? GetProductos();

        Pedido? GetPedido(string id);
        Pedido? RegistrarPedido(Pedido pedidoEntity);

        Pedido? EditarPedido(Pedido pedidoEntity);
    }
}
