// Info.js file....
// skills.js file....
// projects.js file....

async function fetchLeetCodeStats() {
    const username = 'latchignanaprakash'; // Replace with your actual LeetCode username
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch LeetCode statistics');
        }
        const data = await response.json();
        
        // Log the entire data response
        console.log('API Response:', data);

        // Check if the relevant fields exist
        if (data.easySolved !== undefined && data.mediumSolved !== undefined && data.hardSolved !== undefined && data.totalSolved !== undefined) {
            const leetCodeData = {
                easySolved: data.easySolved,
                mediumSolved: data.mediumSolved,
                hardSolved: data.hardSolved,
                totalSolved: data.totalSolved
            };

            const statsEvent = new CustomEvent('leetCodeStats', { detail: leetCodeData });
            document.dispatchEvent(statsEvent);
        } else {
            console.error('Statistics not found in the response.');
        }

    } catch (error) {
        console.error('Error fetching LeetCode statistics:', error);
    }
}

// Call the function to fetch stats
fetchLeetCodeStats();


// Links of the External websites............

function redirectToLeetCode() {
    window.open('https://leetcode.com/u/latchignanaprakash/', '_blank');
}
function redirectToGithub() {
    window.open('https://github.com/GnanaPrakash07', '_blank');
}
function redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/latchi/', '_blank');
}
function redirectToInstagram() {
    window.open('https://www.instagram.com/__me__prakash__07__/', '_blank');
}

// skills.js.....

function redirectToJava() {
    window.open('https://www.java.com/en/', '_blank');
}
function redirectToCpp() {
    window.open('https://isocpp.org/', '_blank');
}
function redirectToC() {
    window.open('https://devdocs.io/c/', '_blank');
}
function redirectToPython() {
    window.open('https://www.python.org/', '_blank');
}
function redirectToJavaScript() {
    window.open('https://www.javascript.com/', '_blank');
}
function redirectToCSharp() {
    window.open('https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/', '_blank');
}
function redirectToHtml() {
    window.open('https://html.spec.whatwg.org/', '_blank');
}
function redirectToCss() {
    window.open('https://www.w3.org/TR/CSS/#css', '_blank');
}
function redirectToMongoDB() {
    window.open('https://www.mongodb.com/docs/', '_blank');
}
function redirectToMysql() {
    window.open('https://www.mysql.com/', '_blank');
}
function redirectToReact() {
    window.open('https://react.dev/', '_blank');
}
function redirectToNodeJS() {
    window.open('', '_blank');
}
function redirectTotypeScript() {
    window.open('https://spring.io/projects/spring-boot', '_blank');
}

// project.js......

function openMyProject(url) {
    window.open(url, '_blank');
}

// To Open my resume.....

function openResume() {
    const resumeUrl = './images/CV_2.pdf';
    window.open(resumeUrl, '_blank');
}
