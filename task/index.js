//
// Задание 1.2:
// 1. Создать json файл с обьектами
// 2. С помощью API запроса сделать запрос к файлу
// 3. Обработать входящие данные из json файла и вывести их в консоль


const database = './data.json'  // 1. Создание переменной с данными

const getData = async () => {
  return await fetch(database) // 2. Запрос к файлу с данными
    .then(res => res.json())
    .then(data => console.log(data)) // 3. Обработка данных и вывод их в консоль
}

getData()