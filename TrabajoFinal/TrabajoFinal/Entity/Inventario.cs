namespace TrabajoFinal.Entity
{
    public class Inventario
    {
        public int Id { get; set; }
        public int cantidad { get; set; }
        public int producto_id { get; set; }
        public string? ubicacion { get; set; }
    }
}
