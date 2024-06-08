// Описать interface на основе переменной users и использовать его соответственно.
// Note: Используем разные префиксы для interface, type, enum (I, T, E соответственно)

interface IUser {
  name: string;
  age: number;
  occupation: string;
}

type TUserArray = Array<IUser>;

const users: TUserArray = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

function logPerson(user: IUser) {
  console.log(` - ${user.name}, ${user.age}`);
}

export { users, logPerson };
