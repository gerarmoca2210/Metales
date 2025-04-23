namespace TrabajoFinal.Entity
{
    public class Clientes
    {
        public string? _id { get; set; }
        public string? nombre { get; set; }
        public string? telefono { get; set; }
        public string? email { get; set; }
        public Direccion? direccion { get; set; }
    }
}
