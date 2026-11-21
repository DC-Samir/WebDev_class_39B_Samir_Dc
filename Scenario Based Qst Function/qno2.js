const calculateAverage = (m1, m2, m3) => {
    let total = m1 + m2 + m3;
    let average = total / 3;
    return average;
};

const getDivision = (average) => {
    if (average >= 70) {
        return "First Division";
    }
    else if (average >= 60) {
        return "Second Division";
    }
    else if (average >= 50) {
        return "Third Division";
    }
    else {
        return "Fail";
    }
};

const processResult = (name, m1, m2, m3, callback) => {
    let average = callback(m1, m2, m3);
    let division = getDivision(average);

    console.log("Student: " + name);
    console.log("Average: " + average);
    console.log("Division: " + division);
};
processResult("Raj", 70, 60, 90, calculateAverage);