// function to fetch data from the star wars API
async function fetchCharacterData(characterId) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
        if (!response.ok) {
            throw new Error(`Failed to fetch character data for this ID${characterId}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// function to fetch planet data from the star wars API
async function fetchPlanetData(planetUrl) {
    try {
        //const response = await fetch(`https://swapi.dev/api/planets/${planetUrl}/`); WRONG
        const response = await fetch(planetUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch planet data from this URL${planetUrl}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
// function to fetch starShips data from the star wars API
async function fetchStarShipsData(StarShips) {
    try {
        const response = await fetch(StarShips);
        if (!response.ok) {
            throw new Error(`Failed to fetch StarShips data from this URL${StarShips}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
        return null;
    }
}



// function to display character data in the table!!!!!!1
async function displayCharacterData() {
    const characterIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const characterTable = document.getElementById('characterTable');

    for (const characterId of characterIds) {
        const characterData = await fetchCharacterData(characterId);
        if (characterData) {
            const planetData = await fetchPlanetData(characterData.homeworld);
            if (planetData) {
                const line = document.createElement('tr');// create new element
                line.innerHTML = `
                    <td>${characterData.name}</td>
                    <td>${characterData.height}</td>
                    <td>${characterData.hair_color}</td>
                    <td>${planetData.name}</td>
                    <td>${planetData.population}</td>
                `;
                characterTable.appendChild(line);// add new element in the father (appendChild)
            }
        }
    }
}

// call the function to display dont forget!!
displayCharacterData();
