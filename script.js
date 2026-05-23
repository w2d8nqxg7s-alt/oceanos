function mostrarOceano(id) {

    // Ocultar todos los paneles
    const paneles = document.querySelectorAll('.info');
    paneles.forEach(panel => panel.style.display = 'none');

    // Quitar clase activo de todos los botones
    const botones = document.querySelectorAll('.botones button');
    botones.forEach(btn => btn.classList.remove('activo'));

    // Mostrar el panel elegido
    const seleccionado = document.getElementById(id);
    seleccionado.style.display = 'block';

    // Marcar el botón como activo
    const btnActivo = document.getElementById('btn-' + id);
    btnActivo.classList.add('activo');

    // Scroll suave hacia el panel
    seleccionado.scrollIntoView({ behavior: 'smooth', block: 'start' });
}