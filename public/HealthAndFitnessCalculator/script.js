// BMI Calculator
function calculateBMI() {
    const height = parseFloat(document.getElementById("bmi-height").value) / 100;
    const weight = parseFloat(document.getElementById("bmi-weight").value);

    if (height && weight) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = "";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obesity";

        document.getElementById("bmi-result").innerText = `Your BMI is ${bmi} (${category}).`;
    } else {
        document.getElementById("bmi-result").innerText = "Please enter valid inputs.";
    }
}

// BMR Calculator
function calculateBMR() {
    const gender = document.getElementById("bmr-gender").value;
    const age = parseInt(document.getElementById("bmr-age").value);
    const weight = parseFloat(document.getElementById("bmr-weight").value);
    const height = parseFloat(document.getElementById("bmr-height").value);

    if (gender && age && weight && height) {
        let bmr = 0;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        document.getElementById("bmr-result").innerText = `Your BMR is ${bmr.toFixed(2)} calories/day.`;
    } else {
        document.getElementById("bmr-result").innerText = "Please enter valid inputs.";
    }
}

// Calorie Calculator
function calculateCalories() {
    const activity = parseFloat(document.getElementById("calorie-activity").value);
    const age = parseInt(document.getElementById("calorie-age").value);
    const weight = parseFloat(document.getElementById("calorie-weight").value);
    const height = parseFloat(document.getElementById("calorie-height").value);
    const gender = document.getElementById("calorie-gender").value;

    if (activity && age && weight && height && gender) {
        let bmr = 0;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        const calorieNeeds = (bmr * activity).toFixed(2);
        document.getElementById("calorie-result").innerText = `Your daily calorie need is ${calorieNeeds} calories/day.`;
    } else {
        document.getElementById("calorie-result").innerText = "Please enter valid inputs.";
    }
}

// Body Fat Calculator
function calculateBodyFat() {
    const gender = document.getElementById("bodyfat-gender").value;
    const age = parseInt(document.getElementById("bodyfat-age").value);
    const waist = parseFloat(document.getElementById("bodyfat-waist").value);
    const neck = parseFloat(document.getElementById("bodyfat-neck").value);

    if (gender && age && waist && neck) {
        let bodyFat = 0;
        if (gender === "male") {
            bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(age) + 36.76;
        } else {
            bodyFat = 163.205 * Math.log10(waist + neck) - 97.684 * Math.log10(age) - 78.387;
        }
        document.getElementById("bodyfat-result").innerText = `Your body fat percentage is ${bodyFat.toFixed(2)}%.`;
    } else {
        document.getElementById("bodyfat-result").innerText = "Please enter valid inputs.";
    }
}

// Ideal Weight Calculator
function calculateIdealWeight() {
    const gender = document.getElementById("ideal-gender").value;
    const height = parseFloat(document.getElementById("ideal-height").value);
    const age = parseInt(document.getElementById("ideal-age").value);
    const frameSize = document.getElementById("ideal-frame").value;

    if (gender && height && age && frameSize) {
        let idealWeight = 0;
        const baseHeight = gender === "male" ? 152.4 : 152.4; // Base height in cm
        const baseWeight = gender === "male" ? 50 : 45.5; // Base weight in kg
        const extraWeight = (height - baseHeight) * (gender === "male" ? 1.1 : 1); // kg per cm above base height

        if (frameSize === "small") idealWeight = baseWeight + extraWeight - 2;
        else if (frameSize === "large") idealWeight = baseWeight + extraWeight + 2;
        else idealWeight = baseWeight + extraWeight;

        document.getElementById("ideal-result").innerText = `Your ideal weight range is ${idealWeight.toFixed(2)} kg.`;
    } else {
        document.getElementById("ideal-result").innerText = "Please enter valid inputs.";
    }
}
