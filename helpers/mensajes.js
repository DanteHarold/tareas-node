require("colors");

const mostrarMenu = () => {
  return new Promise((res, rej) => {
    console.clear();
    console.log("==========================".green);
    console.log("   Seleccione una Opción   ".green);
    console.log("==========================\n".green);

    console.log(`${"1.".green} Crear una Tarea`);
    console.log(`${"2.".green} Listar Tareas`);
    console.log(`${"3.".green} Listar tarea Completadas`);
    console.log(`${"4.".green} Listar tarea Pendientes`);
    console.log(`${"5.".green} Completar tareas`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(" Seleccione una Opción ", (opt) => {
      console.log({ opt });
      readline.close;
      res(opt);
    });
  });
};

const pausa = () => {
  return new Promise((res, rej) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(
      `\nPresione ${"Enter".green} para continuar \n`,
      (opt) => {
        console.log({ opt });
        readline.close;
        res();
      }
    );
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
