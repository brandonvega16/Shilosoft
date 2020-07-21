let alta = document.getElementById('alta');

function servicios()
{
    alta.src='img/ServiciosTecnico.png';
    document.getElementById('producto').innerHTML = "Servicios";
    document.getElementById('titulo').innerHTML = "Servicio General";
    document.getElementById('desc').innerHTML = "Reparaciones";
    document.getElementById('texto').innerHTML = "Servicio Tecnico basado en reparaciones de hardware de cualquier equipo de computo.";
}

function equipos() {
    alta.src='img/equipo.png';
    document.getElementById('producto').innerHTML = "Equipos";
    document.getElementById('titulo').innerHTML = "Equipos Gama Alta";
    document.getElementById('desc').innerHTML = "Equipos Gamer";
    document.getElementById('texto').innerHTML = "Equipos de gama alta con espeficiaciones por usuarios para su maximo desempeño.";
    
  }

function accesorios() {
    alta.src='img/accesorios.png';
    document.getElementById('producto').innerHTML = "Accesorios";
    document.getElementById('titulo').innerHTML = "Accesorios en General";
    document.getElementById('desc').innerHTML = "Accesorios";
    document.getElementById('texto').innerHTML = "Accesorios de todo tipo y excelente calidad para cualquier tipo de PC.";
    
}

function cursos() {
    alta.src='img/cursos.png';
    document.getElementById('producto').innerHTML = "Cursos";
    document.getElementById('titulo').innerHTML = "Cursos Basicos";
    document.getElementById('desc').innerHTML = "Cursos";
    document.getElementById('texto').innerHTML = "Cursos basicos diverosos para cualquier edad.";
    
  }

  function web() {
    alta.src='img/web.png';
    document.getElementById('producto').innerHTML = "Desarrollo Web";
    document.getElementById('titulo').innerHTML = "Desarrollo Web";
    document.getElementById('desc').innerHTML = "Sistmas Web";
    document.getElementById('texto').innerHTML = "Desarrollo de sistmas y paginas web para cualquier tipo de servicio.";
    
  }

  function movil() {
    alta.src='img/movil.png';
    document.getElementById('producto').innerHTML = "Desarrollo Movil";
    document.getElementById('titulo').innerHTML = "Desarrollo Movil";
    document.getElementById('desc').innerHTML = "Aplicaciones";
    document.getElementById('texto').innerHTML = "Desarrollo de aplicaciones para cualquier tipo de servicio.";
    
  }