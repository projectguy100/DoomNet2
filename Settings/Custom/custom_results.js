// Custom results array
const customResults = [
    {
        title: "DoomNet credits",
        link: "https://doomnet.example.com",
        snippet: "Cresits to doomnet 2"
    },
    {
        title: "Doom Mods Collection",
        link: "https://doommods.example.com",
        snippet: "Find the latest and greatest mods for Doom!"
    }
];

// Modify displayResults to include custom results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Combine Google API results with custom ones
    const allResults = [...customResults, ...(results || [])];

    if (allResults.length > 0) {
        allResults.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');
            resultDiv.innerHTML = `
                <a href="${result.link}" target="_blank">${result.title}</a>
                <p>${result.snippet}</p>
            `;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>404 - No results found. Please search for something else.</p>';
    }
}
