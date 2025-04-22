namespace TrabajoFinal.Entity
{
    public class Facturas
    {
        public int Id { get; set; }
        public int? pedido_id { get; set; }
        public string? fecha { get; set; }
        public int total { get; set; }
        public bool pagado { get; set; }
    }
}
