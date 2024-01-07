document.addEventListener("DOMContentLoaded", function () {

    const ramadanDate = new Date("March 10, 2024 00:00:00").getTime();

    const countdownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeDifference = ramadanDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Ramadan has begun!";
        }
    }, 1000);
});
