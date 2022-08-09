const inquirer = require("inquirer");
require("colors");
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea Hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar Tareas Completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tarea Pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar Tarea`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log("==========================".green);
  console.log("   Seleccione una Opción   ".white);
  console.log("==========================\n".green);
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};
const pausa = async () => {
  const final = [
    {
      type: "input",
      name: "opcion",
      message: `Presione ${"Enter".green} para Continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(final);
};
const leerInput = async (mensaje) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Por favor Ingrese un Valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};
module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
