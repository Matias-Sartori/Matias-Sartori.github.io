document.getElementById('botonHistorialAdicional').addEventListener('click', function() {
  verOcultarHistorialCompleto()
})

function verOcultarHistorialCompleto() {
  let botonHistorialAdicional = document.getElementById('botonHistorialAdicional')
  let historialAdicional = document.getElementById('historialAdicional')
  let estaOculto = historialAdicional.style.display !== 'block'

  historialAdicional.style.display = estaOculto ? 'block' : 'none'

  estaOculto = !estaOculto

  botonHistorialAdicional.textContent = estaOculto ? 'Ver historial completo' : 'Ocultar historial completo'
}