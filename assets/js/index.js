const content = document.querySelector(".content");

(async function () {
	try {
		const response = await fetch(
			"https://63e1750859bb472a743874c3.mockapi.io/projects"
		);
		const data = await response.json();

		content.innerHTML = data
			.map((item) => {
				return `
            <div class="card">
            <h2 class="card__title">${item.title}</h2>
            <p class="card__description">${item.description}</p>
            <div class="card-links">
                <a href="https://${item.links[0]}" class="card-links__item">
                    <img src="assets/img/icons/link.svg" alt="demo: " />
                    <span>${item.links[0]}</span>
                </a>
                ${
					item.links[1]
						? `<a href="https://${item.links[1]}" class="card-links__item">
                    <img
                        src="assets/img/icons/github.svg"
                        alt="github:"
                    />
                    <span>${item.links[1]}</span>
                </a>`
						: ""
				}
            </div>
            <ul class="card-list">
                ${item.tags
					.map(
						(key) => `
                        <li class="card-list__item card-list__item_theme_${
							key.id || key.toLowerCase()
						}">
                        ${key.title || key}
                        </li>
                    `
					)
					.join("")}
                
            </ul>
        </div>
            `;
			})
			.join("");
	} catch (error) {
		console.log(error);
		alert("sorry, but.. error :(");
	}
})();
