'use strict'

const characterButton = document.getElementById('characterButton');

characterButton.addEventListener('click', function (event) {
    event.preventDefault();
    const url = 'https://swapi.dev/api/people/';
    fetch(url)
        .then(function(response) {
            return response.json;
        })
        .then(function (data) {
            var characters = data.results.map((character) => {
                return `<div>
                            <ul>
                                <li>${character.name}</li>
                                <li>${character.height}</li>
                                <li>${character.mass}</li>
                            </ul>
                        </div>`;

            });
            document.getElementById('output').innerHTML = characters
        })
})