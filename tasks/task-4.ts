/*
Описать клас таким образом, чтоб он мог работать с динамическими типами данных. Для этого использовать generics

  - Метод get должен возвращать массив с описанным типом на основе переданного generic.
    То есть, если в класс передан generic string - метод должен возвращать string[]

  - Метод add должен принимать 2 аргумента:
    el: элемент, который нужно добавить в elements
    type: куда именно добавить элемент. Может быть либо append, либо prepend. Дефолтное значение - append

  - Метод contains принимает аргумент predicate, который является функцией и проверяет существует ли элемент в массиве elements.
    Пример использования смотреть ниже

  - Метод delete принимает аргумент predicate, который является функцией и удаляет элемент из массива elements.
    Пример использования смотреть ниже
*/

interface IUser {
  id: number
  name: string
}

class Collection {
  private elements = []

  constructor (elements = []) {
    this.elements = elements
  }

  get () {
    return this.elements
  }

  add (el, type) {
    // ...
  }

  contains (predicate) {
    // ...
  }

  delete (predicate) {
    // ...
  }
}

const stringCollection = new Collection()
stringCollection.add('Hello, World!')
stringCollection.contains(el => el === 'Hello, TS')

const strings = stringCollection.get()

const userCollection = new Collection()
userCollection.add({ id: 1, name: 'Viktor' })
userCollection.delete(el => el.id === 1)
const users = userCollection.get()

export {
  strings,
  users
}
