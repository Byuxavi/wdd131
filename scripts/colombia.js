document.addEventListener("DOMContentLoaded", () => {
    const temp = 22; 
    const windSpeed = 12; 

    const calculateWindChill = (temperature, windSpeed) => {
        if (temperature <= 10 && windSpeed > 4.8) {
            return (
                13.12 +
                0.6215 * temperature -
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temperature * Math.pow(windSpeed, 0.16)
            ).toFixed(1);
        } else {
            return "N/A";
        }
    };

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windchill").textContent = windChill;

    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString();
});
