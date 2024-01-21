export default function getTimeDifference(parameterTime) {
    const currentTime = new Date();
    const currentDate = new Date(currentTime);
    const parameterDate = new Date(parameterTime);


    const timeDifference = Math.abs(currentDate - parameterDate);

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25)); // Average year length

    if (minutes < 60) {
        return `${minutes} minutes`;
    } else if (hours < 24) {
        return `${hours} hours`;
    } else if (days < 30) {
        return `${days} day`;
    } else if (months < 12) {
        return `${months} months`;
    } else {
        return `${years} years`;
    }
}

// Example usage: // Current time
// const parameterTime = "2024-01-21T04:30:17Z"; // Your parameter time

// const difference = getTimeDifference(parameterTime);