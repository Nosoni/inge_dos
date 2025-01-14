import { server } from "../constantes/constantes"
const servicio = "proyecto_tarea";
const servicioView = "proyecto_tarea_view";

const proyectoTareaViewGetByProyecto = async (proyecto_id) => {
  var where = `?proyecto_id=eq.${proyecto_id}`
  const url = `${server}/${servicioView}${where}`;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return await fetch(url, requestOptions)
    .then(response => response.json())
};

const proyectoTareaAsignar = async (proyectoTarea) => {
  const url = `${server}/${servicio}`;
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...proyectoTarea, activo: true })
  };

  return await fetch(url, requestOptions)
}

const proyectoTareaDeshabilitar = async (id) => {
  var where = `?id=eq.${id}`
  const url = `${server}/${servicio}${where}`;
  var requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ activo: false })
  };

  return await fetch(url, requestOptions)
}

const proyectoTareaViewGetAllSelect = async (select) => {
  var where = `?select=${select}`
  const url = `${server}/${servicioView}${where}`;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return await fetch(url, requestOptions)
    .then(response => response.json())
}


export {
  proyectoTareaViewGetByProyecto, proyectoTareaAsignar, proyectoTareaDeshabilitar,
  proyectoTareaViewGetAllSelect
};
