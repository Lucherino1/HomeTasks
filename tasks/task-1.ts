// Описать interface на основе переменной users и использовать его соответственно.
// Note: Используем разные префиксы для interface, type, enum (I, T, E соответственно)

const users = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
]

function logPerson (user) {
  console.log(` - ${user.name}, ${user.age}`)
}

export {
  users,
  logPerson
}
