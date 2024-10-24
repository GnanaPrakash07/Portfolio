document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('command-input');
    const outputDiv = document.getElementById('output');

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const commands = inputField.value;
            const command = commands.trim().toLowerCase();
            executeCommand(command, commands);
            inputField.value = '';
        }
    });

    function executeCommand(command, commands) {
        const output = document.createElement('div');

        const helpCommand = ` Available Commands:\n
            -------------------------------------------\n
            "Introduce yourself" / "introduce"\n
            "What are your hobbies" / "hobbies"\n
            "What are your skills" / "skills"\n
            "What are your projects" / "projects"\n
            "What are your work experience" / "experience"\n
            "Tell your education details" / "education"\n
            "clear": clears all the chat.
        `;

        // Split the help command into individual lines
        const helpLines = helpCommand.split('\n');

        const introduce = " I am Ganan Prakash, currently pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University. I am from Andhra Pradesh.";
        const hobbies = " I enjoy playing volleyball, coding, and watching movies."
        const skills = " I have acquired good skills during my B.Tech in languages like Java, C, Python, and machine learning, as well as frameworks like Spring BOOT, development tools like HTML and CSS, and databases like MongoDB and MySQL.";
        const projects = " I have worked on several projects, including a PG Booking Systembackend using Spring Boot, MongoDB, Redis, and Google Maps API for location data, with JWT for authentication. I built a Test Environment Platform for students to take timed MCQ tests and developed a Google News-like Backend for efficient article retrieval. Additionally, I created an Admin Panel API using Node.js, Express, and SQL with JWT-based authentication and role-based access control. I also worked on a CI/CD Pipeline Project, containerizing a webpage with Docker, automating deployments with Jenkins, and using Ansible for configuration management."
        const experience = "I have experience in backend and full-stack development, working with technologies like Spring Boot, Express, MongoDB, and SQL. I have implemented JWT-based authentication and role-based access control in various projects, and I’m familiar with caching mechanisms like **Redis**. Additionally, I have hands-on experience with **CI/CD pipelines**, where I containerized applications using **Docker** and automated build and deployment processes with **Jenkins** and **Ansible**. I also developed a mobile app using **React** to visualize coding algorithms for teaching purposes. My experience spans backend API development, cloud-based integrations, and DevOps practices."
        const education = " I have completed my 10th in Narayana guntur. Intermediate in Narayana in vijawada, Currently pursuing B-tech Computer science in Lovely Professional University."
        // output.textContent = '$sai/portfolio ~ >> ' + command;
        const helpDiv = document.createElement('div');
        helpDiv.textContent = "$ Prakash/portfolio~ >> " + commands;
        outputDiv.appendChild(helpDiv);

        if(command == "help") {
            helpLines.forEach(line => {
                const helpDiv = document.createElement('div');
                helpDiv.textContent = line;
                outputDiv.appendChild(helpDiv);
            });
        }
        else if(command == "introduce yourself" || command == "introduce" || command == "intro") {
            command = introduce;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "what are your hobbies" || command == "hobbies" || command == "hobby") {
            command = hobbies;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "what are your skills" || command == "skills" || command == "skill") {
            command = skills;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "what are your projects" || command == "projects" || command == "project") {
            command = projects;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "what are your work experience" || command == "work experience" || command == "work" || command == "experience") {
            command = experience;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "tell your education details" || command == "your education details" || command == "education details" || command == "education") {
            command = education;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "clear") {
            outputDiv.innerHTML = '';
        }
        else {
            command = ' Invalid command, please type " help " to check the commands.';
            output.textContent = command;
            outputDiv.appendChild(output);
        }

        const lineBreak = document.createElement('br');
        outputDiv.appendChild(lineBreak);
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const name = document.querySelector('.contact-name').value;
    const email = document.querySelector('.contact-email').value;
    const message = document.querySelector('.contact-message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields (Name, Email, Message)");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const titleInput = document.getElementById("title");
    const messageInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
    return true; 
}