package Modelos;
// Generated 16-ago-2017 18:58:25 by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;

/**
 * Usuario generated by hbm2java
 */
public class Usuario  implements java.io.Serializable {


     private Integer idCliente;
     private String nombres;
     private String apellidos;
     private String tdocumento;
     private String documento;
     private String celular;
     private String ciudad;
     private String direccion;
     private String genero;
     private String nlicencia;
     private String estado;
     private String contrasena;
     private Set ventas = new HashSet(0);
     private Set apartars = new HashSet(0);
     private Set automovils = new HashSet(0);

    public Usuario() {
    }

	public Usuario(int Id,String nombres, String apellidos, String tdocumento, String documento, String celular, String ciudad, String direccion, String genero, String nlicencia, String estado, String contrasena) {
                this.idCliente = Id;

            this.nombres = nombres;
        this.apellidos = apellidos;
        this.tdocumento = tdocumento;
        this.documento = documento;
        this.celular = celular;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.genero = genero;
        this.nlicencia = nlicencia;
        this.estado = estado;
        this.contrasena = contrasena;
    }
    public Usuario(String nombres, String apellidos, String tdocumento, String documento, String celular, String ciudad, String direccion, String genero, String nlicencia, String estado, String contrasena) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.tdocumento = tdocumento;
        this.documento = documento;
        this.celular = celular;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.genero = genero;
        this.nlicencia = nlicencia;
        this.estado = estado;
        this.contrasena = contrasena;
    }
    public Usuario(String nombres, String apellidos, String tdocumento, String documento, String celular, String ciudad, String direccion, String genero, String nlicencia, String estado, String contrasena, Set ventas, Set apartars, Set automovils) {
       this.nombres = nombres;
       this.apellidos = apellidos;
       this.tdocumento = tdocumento;
       this.documento = documento;
       this.celular = celular;
       this.ciudad = ciudad;
       this.direccion = direccion;
       this.genero = genero;
       this.nlicencia = nlicencia;
       this.estado = estado;
       this.contrasena = contrasena;
       this.ventas = ventas;
       this.apartars = apartars;
       this.automovils = automovils;
    }

    @Override
    public String toString() {
        return this.nombres+" -- "+this.apellidos;
    }
   
    public Integer getIdCliente() {
        return this.idCliente;
    }
    
    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }
    public String getNombres() {
        return this.nombres;
    }
    
    public void setNombres(String nombres) {
        this.nombres = nombres;
    }
    public String getApellidos() {
        return this.apellidos;
    }
    
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getTdocumento() {
        return this.tdocumento;
    }
    
    public void setTdocumento(String tdocumento) {
        this.tdocumento = tdocumento;
    }
    public String getDocumento() {
        return this.documento;
    }
    
    public void setDocumento(String documento) {
        this.documento = documento;
    }
    public String getCelular() {
        return this.celular;
    }
    
    public void setCelular(String celular) {
        this.celular = celular;
    }
    public String getCiudad() {
        return this.ciudad;
    }
    
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }
    public String getDireccion() {
        return this.direccion;
    }
    
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getGenero() {
        return this.genero;
    }
    
    public void setGenero(String genero) {
        this.genero = genero;
    }
    public String getNlicencia() {
        return this.nlicencia;
    }
    
    public void setNlicencia(String nlicencia) {
        this.nlicencia = nlicencia;
    }
    public String getEstado() {
        return this.estado;
    }
    
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public String getContrasena() {
        return this.contrasena;
    }
    
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public Set getVentas() {
        return this.ventas;
    }
    
    public void setVentas(Set ventas) {
        this.ventas = ventas;
    }
    public Set getApartars() {
        return this.apartars;
    }
    
    public void setApartars(Set apartars) {
        this.apartars = apartars;
    }
    public Set getAutomovils() {
        return this.automovils;
    }
    
    public void setAutomovils(Set automovils) {
        this.automovils = automovils;
    }




}


