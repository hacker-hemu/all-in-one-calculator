function calculateLength() {
    const length = parseFloat(document.getElementById('lengthInput').value);
    const unit = document.getElementById('lengthUnit').value;
    const targetUnit = document.getElementById('lengthTargetUnit').value;
    let convertedLength;

    // Conversion logic
    if (unit === 'meters' && targetUnit === 'feet') {
        convertedLength = length * 3.28084;
    } else if (unit === 'feet' && targetUnit === 'meters') {
        convertedLength = length / 3.28084;
    } else if (unit === 'inches' && targetUnit === 'meters') {
        convertedLength = length * 0.0254;
    } else if (unit === 'meters' && targetUnit === 'inches') {
        convertedLength = length / 0.0254;
    } else if (unit === 'feet' && targetUnit === 'inches') {
        convertedLength = length * 12;
    } else if (unit === 'inches' && targetUnit === 'feet') {
        convertedLength = length / 12;
    } else {
        convertedLength = length; // Same unit
    }

    document.getElementById('lengthOutput').innerText = `Converted Length: ${convertedLength.toFixed(2)} ${targetUnit}`;
}

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date(document.getElementById('currentDate').value);
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthdate.getMonth();
    const ageInYears = monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate()) ? age - 1 : age;

    document.getElementById('ageOutput').innerText = `Age: ${ageInYears} years`;
}

function calculateHours() {
    const hours = parseFloat(document.getElementById('hoursInput').value);
    const minutes = hours * 60;
    const seconds = minutes * 60;

    document.getElementById('hoursOutput').innerText = `Minutes: ${minutes}, Seconds: ${seconds}`;
}

function calculateDate() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const duration = endDate - startDate;
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('dateOutput').innerText = `Duration: ${days} days, ${hours} hours`;
}

function calculateGPA() {
    const input = document.getElementById('gpaInput').value.split('\n');
    let totalPoints = 0;
    let totalCredits = 0;

    input.forEach(line => {
        const [course, credits, grade] = line.split(',').map(item => item.trim());
        const gradePoints = gradeToPoints(grade);
        totalPoints += gradePoints * parseFloat(credits);
        totalCredits += parseFloat(credits);
    });

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById('gpaOutput').innerText = `GPA: ${gpa}`;
}

function gradeToPoints(grade) {
    switch (grade.toUpperCase()) {
        case 'A': return 4.0;
        case 'B': return 3.0;
 case 'C': return 2.0;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return 0.0; // For invalid grades
    }
}

function calculateHeight() {
    const height = parseFloat(document.getElementById('heightInput').value);
    const unit = document.getElementById('heightUnit').value;
    const targetUnit = document.getElementById('heightTargetUnit').value;
    let convertedHeight;

    // Conversion logic
    if (unit === 'cm' && targetUnit === 'inches') {
        convertedHeight = height / 2.54;
    } else if (unit === 'inches' && targetUnit === 'cm') {
        convertedHeight = height * 2.54;
    } else {
        convertedHeight = height; // Same unit
    }

    document.getElementById('heightOutput').innerText = `Converted Height: ${convertedHeight.toFixed(2)} ${targetUnit}`;
}

function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('passwordOutput').innerText = `Generated Password: ${password}`;
}

function calculateBill() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const totalBill = billAmount + (billAmount * (tipPercentage / 100));

    document.getElementById('billOutput').innerText = `Total Bill (including tip): $${totalBill.toFixed(2)}`;
}

function goToNextPage() {
    // Logic to navigate to the next page
    window.location.href = "nextPage.html"; // Replace with your actual next page URL
}