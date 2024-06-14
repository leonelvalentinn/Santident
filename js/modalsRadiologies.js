const infoRadiologies = [
  {
    id: 0,
    imgSrc: 'imagenes/radiology/nariz-1.webp',
    title: 'Caldwell',
    text: 'Caldwell ofrece una vista detallada de los senos frontales y etmoidales. Es esencial para diagnosticar infecciones y otras anomalías. Utilizamos tecnología avanzada para obtener imágenes precisas y de alta calidad.'
  },
  {
    id: 1,
    imgSrc: 'imagenes/radiology/nariz.webp',
    title: 'Waters',
    text: 'Waters proporciona una imagen detallada de los senos paranasales, útil para diagnosticar infecciones y anomalías. Utilizamos tecnología avanzada para obtener imágenes precisas y de alta calidad.'
  },
  {
    id: 2,
    imgSrc: 'imagenes/radiology/huesos-de-la-mano.webp',
    title: 'Carpal',
    text: 'Proporciona imágenes detalladas de la muñeca y los huesos de la mano. Es fundamental para evaluar el crecimiento óseo y diagnosticar trastornos en la muñeca.'
  },
  {
    id: 3,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'A.T.M. Boca abierta y cerrada',
    text: 'Proporciona imágenes detalladas de la articulación temporomandibular en ambas posiciones. Es esencial para diagnosticar trastornos de la mandíbula y planificar tratamientos adecuados. '
  },
  {
    id: 4,
    imgSrc: 'imagenes/radiology/antero.webp',
    title: 'PA anteroposterior',
    text: 'Ofrece una vista detallada del cráneo de adelante hacia atrás. Es esencial para diagnosticar y planificar tratamientos dentales y maxilofaciales. Utilizamos tecnología avanzada para obtener imágenes precisas y de alta calidad.'
  },
  {
    id: 5,
    imgSrc: 'imagenes/radiology/postero.webp',
    title: 'PA posteroanterior',
    text: 'Proporciona una vista detallada del cráneo desde atrás hacia adelante. Es crucial para diagnosticar problemas dentales y maxilofaciales, así como para planificar tratamientos ortodónticos y quirúrgicos. '
  },
  {
    id: 6,
    imgSrc: 'imagenes/radiology/craneo.webp',
    title: 'Lateral de cráneo',
    text: 'Ofrece una imagen detallada del perfil del cráneo, esencial para evaluar el desarrollo dental y planificar tratamientos ortodónticos. Utilizamos tecnología avanzada para obtener imágenes precisas y de alta calidad.'
  },
  {
    id: 7,
    imgSrc: 'imagenes/radiology/mandibula.webp',
    title: 'Panorámica',
    text: 'Este servicio es esencial para diagnosticar y planificar tratamientos de diversas condiciones dentales y maxilofaciales, utilizando tecnología avanzada para obtener imágenes precisas y de alta calidad.'
  }
]

const txCe = [
  {
    id: 0,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'Rickets',
    text: 'Proporciona imágenes detalladas de los huesos para diagnosticar y evaluar esta enfermedad metabólica que afecta el desarrollo óseo en niños y adultos.'
  },
  {
    id: 1,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'Tweed',
    text: 'Servicio especializado que proporciona imágenes detalladas de los huesos y dientes para evaluar la relación y posición de los mismos en el contexto de tratamientos ortodónticos.'
  },
  {
    id: 2,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'Steiner',
    text: 'Servicio especializado que proporciona imágenes detalladas de los huesos y dientes para evaluar la estructura facial y dental en el contexto de tratamientos ortodónticos.'
  },
  {
    id: 3,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'Maac Namara',
    text: 'Servicio especializado que proporciona imágenes detalladas de los huesos y dientes para evaluar la relación esquelética y dental en el contexto de tratamientos ortodónticos.'
  },
  {
    id: 4,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'Jarabak',
    text: 'Servicio especializado que proporciona imágenes detalladas de los huesos y dientes para evaluar la estructura facial y dental en el contexto de tratamientos ortodónticos.'
  },
  {
    id: 5,
    imgSrc: 'imagenes/radiology/abierta.webp',
    title: 'Downs',
    text: 'Trazo Cefalométrico de Downs. Análisis esquelético, determina la posición y el crecimiento de los maxilares a partir de cinco ángulos'
  }
]
const $containerServices = document.getElementById('container-services')

const showServices = () => {
  infoRadiologies.map((item) => {
    $containerServices.insertAdjacentHTML("afterbegin", `
        <div class="item_servicios">
          <button id=${item.id} class='service-btn'>
            <img src=${item.imgSrc} alt=${item.title} />
          </button>
          <div class="nombre_servicio">
            <h4>${item.title}</h4>
          </div>
        </div>
      `)
  })
}

showServices()

const [...btnService] = document.querySelectorAll('button.service-btn')
const $infoServiceContainer = document.getElementById('infoService')
const $containerModal = document.getElementById('modal-info')
const $btnCloseModal = document.getElementById('close-modal')

btnService.map((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.id)
    if (btn.id > 7) {
      $infoServiceContainer.innerHTML = `
        <img src=${txCe[btn.id - 8].imgSrc} alt=${'Imagen de ' + txCe[btn.id - 8].title}>
        <strong>${txCe[btn.id - 8].title}</strong>
        <p>${txCe[btn.id - 8].text}</p>
      `
    } else {
      $infoServiceContainer.innerHTML = `
        <img src=${infoRadiologies[btn.id].imgSrc} alt=${'Imagen de ' + infoRadiologies[btn.id].title}>
        <strong>${infoRadiologies[btn.id].title}</strong>
        <p>${infoRadiologies[btn.id].text}</p>
      `
    }
    $containerModal.classList.add('show-modal')
  })
})

$btnCloseModal.addEventListener('click', () => {
  $containerModal.classList.remove('show-modal')
})