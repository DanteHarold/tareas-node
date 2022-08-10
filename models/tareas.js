/**
 *  _listado:
 * {
 *  'uuid-1221': { id: 1, desc : "", completadoEn : "2323"}
 * }
 *
 */

const Tarea = require("./tarea");
require("colors");
class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }
  listadoCompleto() {
    //* 1. En Verde
    //* 2. Completada Verde
    //* 3. Pendiente Rojo
    //* 1. Tarea : Completada

    this.listadoArr.forEach((el, index) => {
      if (el.completadoEn === null) {
        console.log(
          `${index + 1}`.green + `. ${el.desc} .... ${"Pendiente".red} `
        );
      } else {
        console.log(
          `${index + 1}`.green + `. ${el.desc} .... ${"Completado".green} `
        );
      }
    });
  }
  listarPendientesCompletadas(completadas = true) {
    let contador = 0;
    this.listadoArr.forEach((el, index) => {
      if (completadas) {
        if (el.completadoEn) {
          console.log(
            `${contador + 1}`.green +
              `. ${el.desc} ....` +
              `${el.completadoEn} `.green
          );
          contador++;
        }
      } else {
        if (!el.completadoEn) {
          console.log(
            `${contador + 1}`.green +
              `. ${el.desc} ....` +
              `${el.completadoEn} `.red
          );
          contador++;
        }
      }
    });
  }
  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}
module.exports = Tareas;
