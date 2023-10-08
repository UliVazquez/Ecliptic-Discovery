// LUNAR ECLIPSES FROM HERE
// List of lunar eclipses
const lunarEclipses = [
    {
        date: "October 28, 2023",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "March 25, 2024",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "September 18, 2024",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "March 14, 2025",
        type: "Total Lunar Eclipse",
    },
    {
        date: "September 7, 2025",
        type: "Total Lunar Eclipse",
    },
    {
        date: "March 3, 2026",
        type: "Total Lunar Eclipse",
    },
    {
        date: "August 28, 2026",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "February 20, 2027",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "July 18, 2027",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "August 17, 2027",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "January 12, 2028",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "July 6, 2028",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "December 31, 2028",
        type: "Total Lunar Eclipse",
    },
    {
        date: "July 26, 2029",
        type: "Total Lunar Eclipse",
    },
    {
        date: "December 20, 2029",
        type: "Total Lunar Eclipse",
    },
    {
        date: "June 15, 2030",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "December 9, 2030",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "May 7, 2031",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "June 5, 2031",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "October 30, 2031",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "April 25, 2032",
        type: "Total Lunar Eclipse",
    },
    {
        date: "March 18, 2032",
        type: "Total Lunar Eclipse",
    },
    {
        date: "April 14, 2033",
        type: "Total Lunar Eclipse",
    },
    {
        date: "October 8, 2033",
        type: "Total Lunar Eclipse",
    },
    {
        date: "April 3, 2034",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "September 28, 2034",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "February 22, 2035",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "August 19, 2035",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "February 11, 2036",
        type: "Total Lunar Eclipse",
    },
    {
        date: "August 7, 2036",
        type: "Total Lunar Eclipse",
    },
    {
        date: "January 31, 2037",
        type: "Total Lunar Eclipse",
    },
    {
        date: "July 27, 2037",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "January 21, 2038",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "June 17, 2038",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "July 16, 2038",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "December 11, 2038",
        type: "Penumbral Lunar Eclipse",
    },
    {
        date: "June 6, 2039",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "November 30, 2039",
        type: "Partial Lunar Eclipse",
    },
    {
        date: "May 26, 2040",
        type: "Total Lunar Eclipse",
    },
    {
        date: "November 18, 2040",
        type: "Total Lunar Eclipse",
    },
];

const eclipseListElement = document.getElementById("eclipses");
const eclipseForm = document.getElementById("eclipseForm");
const inputYear = document.getElementById("inputYear");

function showEclipsesByYear(year) {
    eclipseListElement.innerHTML = ''; // Clear the list before showing the results

    const filteredEclipses = lunarEclipses.filter(eclipse => {
        const eclipseYear = parseInt(eclipse.date.split(' ')[2]); // Get the eclipse year
        return eclipseYear === year;
    });

    if (filteredEclipses.length === 0) {
        eclipseListElement.textContent = `No lunar eclipses are recorded for the year ${year}.`;
    } else {
        filteredEclipses.forEach(eclipse => {
            const li = document.createElement("li");
            li.textContent = `On ${eclipse.date}, there will be a ${eclipse.type}.`;
            eclipseListElement.appendChild(li);
        });
    }
}

eclipseForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form behavior (reloading the page)
    
    const year = inputYear.value.trim(); // Get the input value and remove leading/trailing spaces

    if (year === "") {
        eclipseListElement.innerHTML = ''; // Clear the list if the input is empty
    } else {
        const numericYear = parseInt(year);
        if (!isNaN(numericYear)) {
            showEclipsesByYear(numericYear);
        } else {
            eclipseListElement.textContent = "Please enter a valid year.";
        }
    }
});
