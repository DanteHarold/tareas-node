require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");
//const { mostrarMenu, pausa } = require("./helpers/mensajes");
//console.clear();
const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    //* Cargar Tareas
    tareas.cargarTareasFromArray(tareasDB);
  }
  do {
    //opt = await mostrarMenu();
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion : ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5": //* Completado | Pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("Está Seguro ?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea Borrada");
          }
        }

        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
    //if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
