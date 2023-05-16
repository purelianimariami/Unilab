const places_container = document.querySelector('.places_container')

fetch("https://fakerapi.it/api/v1/images?_quantity=10&_type=nature")
    .then(response => response.json())
    .then(data => {
        data.data.forEach(image => {
            const image_element = document.createElement('img')
            image_element.src = image.url
            places_container.appendChild(image_element)
        })
    })
