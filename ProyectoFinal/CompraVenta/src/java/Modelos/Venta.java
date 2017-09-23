package Modelos;
import java.util.Date;

public class Venta  implements java.io.Serializable {


     private Integer idVenta;
     private Automovil automovil;
     private Trabajador trabajador;
     private Usuario usuario;
     private String descuento;
     private double total;
     private String descripcion;
     private Date fechaEntrega;

    public Venta() {
    }

    public Venta(Automovil automovil, Trabajador trabajador, Usuario usuario, String descuento, double total, String descripcion, Date fechaEntrega) {
       this.automovil = automovil;
       this.trabajador = trabajador;
       this.usuario = usuario;
       this.descuento = descuento;
       this.total = total;
       this.descripcion = descripcion;
       this.fechaEntrega = fechaEntrega;
    }
    
   public Venta(int id,Automovil automovil, Trabajador trabajador, Usuario usuario, String descuento, double total, String descripcion, Date fechaEntrega) {
     this.idVenta=id;
       this.automovil = automovil;
       this.trabajador = trabajador;
       this.usuario = usuario;
       this.descuento = descuento;
       this.total = total;
       this.descripcion = descripcion;
       this.fechaEntrega = fechaEntrega;
    }
    public Integer getIdVenta() {
        return this.idVenta;
    }
    
    public void setIdVenta(Integer idVenta) {
        this.idVenta = idVenta;
    }
    public Automovil getAutomovil() {
        return this.automovil;
    }
    
    public void setAutomovil(Automovil automovil) {
        this.automovil = automovil;
    }
    public Trabajador getTrabajador() {
        return this.trabajador;
    }
    
    public void setTrabajador(Trabajador trabajador) {
        this.trabajador = trabajador;
    }
    public Usuario getUsuario() {
        return this.usuario;
    }
    
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    public String getDescuento() {
        return this.descuento;
    }
    
    public void setDescuento(String descuento) {
        this.descuento = descuento;
    }
    public double getTotal() {
        return this.total;
    }
    
    public String getValorS(){
        Double d = this.total;
        return String.valueOf(d.doubleValue());
    }
    
    public void setTotal(double total) {
        this.total = total;
    }
    public String getDescripcion() {
        return this.descripcion;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public Date getFechaEntrega() {
        return this.fechaEntrega;
    }
    
    public void setFechaEntrega(Date fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

}
