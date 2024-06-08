/*
  Описать тип TPerson на основе IUser и IAdmin и использовать его в массиве persons и функции logPerson,
  чтоб исправить все ошибки TS.
*/

interface IUser {
  name: string;
  age: number;
  occupation: string;
}

interface IAdmin {
  name: string;
  age: number;
  role: string;
}

type TPerson = IUser | IAdmin;

const persons: TPerson[] /* <- замінити на IPerson[] */ = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

function logPerson(user: IUser) {
  console.log(` - ${user.name}, ${user.age}`);
}

export { persons, logPerson };
