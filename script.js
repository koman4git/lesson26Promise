"use strict"

const sendData = (el) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(el),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      sendData(data)
    })
    .catch((error) => console.log(error))
}

getData("db.json")