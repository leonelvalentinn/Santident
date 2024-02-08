const more = document.getElementById('more')
const less = document.getElementById('less')
const container = document.getElementById('container-tratamientos')
const services = `
<div class="item_servicios">
          <a href="#" id="trata_siete"
            ><img src="imagenes/protesis_dental.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Blanqueamiento Dental</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_ocho">
            <img src="imagenes/coronas_dentales.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Prótesis Total</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_nueve">
            <img src="imagenes/armonizacion-gingival.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Extracciones</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_diez"
            ><img src="imagenes/DiseñoSonrisa.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Carillas</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_once"
            ><img src="imagenes/operatoria.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Implantes</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_once"
            ><img src="imagenes/operatoria.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Armonización Gingival</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_once"
            ><img src="imagenes/operatoria.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Diseño de Sonrisa</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_once"
            ><img src="imagenes/operatoria.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Puente Dental con Implantes</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_once"
            ><img src="imagenes/operatoria.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Restauración Completa de la Boca</h4>
          </div>
        </div>
        <div class="item_servicios">
          <a href="#" id="trata_once"
            ><img src="imagenes/operatoria.png" alt=""
          /></a>
          <div class="nombre_servicio">
            <h4>Limpieza</h4>
          </div>
        </div>
`
const original = `
<div class="item_servicios">
<a href="#" id="trata_uno"
  ><img src="imagenes/bichectomia.png" alt=""
/></a>
<div class="nombre_servicio">
  <h4>Radiología Dental</h4>
</div>
</div>
<div class="item_servicios">
<a href="#" id="trata_dos"
  ><img src="imagenes/exodoncia-dental.png" alt=""
/></a>
<div class="nombre_servicio">
  <h4>Ortodoncia Dental</h4>
</div>
</div>
<div class="item_servicios">
<a href="#" id="trata_tres">
  <img src="imagenes/BlanqueamientoDental.png" alt=""
/></a>
<div class="nombre_servicio">
  <h4>Endodoncia Avanzada</h4>
</div>
</div>
<div class="item_servicios">
<a href="#" id="trata_cuatro">
  <img src="imagenes/LimpiezaDental.png" alt=""
/></a>
<div class="nombre_servicio">
  <h4>Coronas</h4>
</div>
</div>
<div class="item_servicios">
<a href="#" id="trata_cinco">
  <img src="imagenes/Ortodoncia_n.png" alt=""
/></a>
<div class="nombre_servicio">
  <h4>Cirugía Bucal</h4>
</div>
</div>
<div class="item_servicios">
<a href="#" id="trata_seis"
  ><img src="imagenes/CirugiaImplantes.png" alt=""
/></a>
<div class="nombre_servicio">
  <h4>Operatoria Dental</h4>
</div>
</div>
`

more.addEventListener('click', () => {
  container.insertAdjacentHTML("beforeend", services)
  more.style.display = 'none'
  less.style.display = 'block'
})

less.addEventListener('click', () => {
  container.scrollIntoView({ block: 'start', behavior: 'smooth' })
  container.innerHTML = ''
  container.insertAdjacentHTML('afterbegin', original)
  more.style.display = 'block'
  less.style.display = 'none'
})
