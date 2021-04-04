// TODO: add code here
function init() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            for (let i = 0; i < json.length; i++) {
                //console.log(json[i]);
            }

            const div = document.getElementById("container");


            for (let i = 0; i < json.length; i++) {

                let li = document.createElement('li');
                let ul = document.createElement('ul');
                let head = document.createElement("h3");
                let img = document.createElement("img");

                div.appendChild(ul);
                div.appendChild(img);
                head.innerHTML = `
                <h3>${json[i].firstName}</h3>
                `;
                img.src = json[i].picture;
                img.width = 90;
                img.height = 90;

                li.innerHTML = `
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active ${json[i].active}</li>
                <li>skills ${json[i].skills}</li>`;
                ul.appendChild(head);
                ul.appendChild(li);
                // ul.appendChild(img);

            }
        });
    });
}

window.addEventListener("load", init);