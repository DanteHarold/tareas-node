require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
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
      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
    //if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
