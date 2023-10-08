const solarEclipses = [
    {
        date: "October 14, 2023",
        type: "annular solar eclipse",
        countries: ["United States", "Mexico"]
    },
    {
        date: "August 8, 2024",
        type: "total solar eclipse",
        countries: ["United States", "Mexico"]
    },
    {
        date: "October 2, 2024",
        type: "annular solar eclipse",
        countries: ["Chile"]
    },
    {
        date: "March 29, 2025",
        type: "partial solar eclipse",
        countries: ["Chile"]
    },
    {
        date: "October 21, 2025",
        type: "annular solar eclipse",
        countries: ["Antarctica", "New Zealand"]
    },
    {
        date: "August 12, 2026",
        type: "total solar eclipse",
        countries: ["Iceland", "Spain"]
    },
    {
        date: "February 6, 2027",
        type: "annular solar eclipse",
        countries: ["Argentina"]
    },
    {
        date: "August 2, 2027",
        type: "total solar eclipse",
        countries: ["Egypt", "Saudi Arabia"]
    },
    {
        date: "January 26, 2028",
        type: "annular solar eclipse",
        countries: ["Ecuador"]
    },
    {
        date: "July 22, 2028",
        type: "total solar eclipse",
        countries: ["Australia"]
    },
    {
        date: "June 1, 2030",
        type: "annular solar eclipse",
        countries: ["Russia"]
    },
    {
        date: "November 25, 2030",
        type: "total solar eclipse",
        countries: ["Australia"]
    },
    {
        date: "November 14, 2031",
        type: "annular solar eclipse",
        countries: ["Panama"]
    },
    {
        date: "March 30, 2033",
        type: "total solar eclipse",
        countries: ["United States"]
    },
    {
        date: "March 20, 2034",
        type: "total solar eclipse",
        countries: ["Chad", "Sudan"]
    },
    {
        date: "September 2, 2035",
        type: "total solar eclipse",
        countries: ["China", "Japan"]
    },
    {
        date: "July 13, 2037",
        type: "total solar eclipse",
        countries: ["Australia"]
    },
    {
        date: "December 26, 2038",
        type: "total solar eclipse",
        countries: ["Australia", "New Zealand"]
    },
    {
        date: "December 15, 2039",
        type: "total solar eclipse",
        countries: ["Antarctica"]
    },
];

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchedCountry = document.getElementById("country").value.toLowerCase();
    const affectedEclipses = findEclipses(searchedCountry);
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";
    if (affectedEclipses.length > 0) {
        const ul = document.createElement("ul");
        affectedEclipses.forEach((eclipse) => {
            const li = document.createElement("li");
            li.textContent = `On ${eclipse.date}, there will be a ${eclipse.type}.`;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    } else {
        resultDiv.textContent = `No eclipses affecting ${searchedCountry} were found.`;
    }
});

function findEclipses(country) {
    let affectedEclipses = [];
    for (let eclipse of solarEclipses) {
        if (eclipse.countries.some(c => c.toLowerCase() === country)) {
            affectedEclipses.push({
                date: eclipse.date,
                type: eclipse.type
            });
        }
    }
    return affectedEclipses;
}

const selectElement = document.getElementById("countries");
const inputElement = document.getElementById("country");

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", 
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", 
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", 
    "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
    "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", 
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", 
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", 
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
    "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", 
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", 
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", 
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", 
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", 
    "Yemen", "Zambia", "Zimbabwe"
];
countries.sort();

countries.forEach((country) => {
    const option = document.createElement("option");
    option.text = country;
    option.value = country;
    selectElement.appendChild(option);
});

selectElement.addEventListener("change", function () {
    inputElement.value = selectElement.value;
});