import React,{useEffect} from 'react'

export default function Cards() {

  const obtenerDesdeLocalStorage = (clave: string): any[] | null => {
    try {
      const datosString = localStorage.getItem(clave);
      if (datosString) {
        return JSON.parse(datosString);
      }
      return [];
    } catch (error) {
      console.error('Error al obtener desde localStorage:', error);
      return [];
    }
  };

  useEffect(() => {
    const tareasGuardadas = obtenerDesdeLocalStorage('tareas');
    if (tareasGuardadas) {
      //setTareas(tareasGuardadas);
    }
  }, []);

  return (
    <div>

    </div>
  )
}
