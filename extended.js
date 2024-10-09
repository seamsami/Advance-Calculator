// BMI Calculation
document.getElementById('bmiCalculateBtn').addEventListener('click', function () {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = 'BMI: ' + bmi.toFixed(2);
});

// Discount Calculation
document.getElementById('discountCalculateBtn').addEventListener('click', function () {
    let originalPrice = document.getElementById('originalPrice').value;
    let discountPercent = document.getElementById('discountPercent').value;
    let discountedPrice = originalPrice - (originalPrice * (discountPercent / 100));
    document.getElementById('discountResult').innerText = 'Discounted Price: ' + discountedPrice.toFixed(2);
});
