// Currency conversion logic
document.getElementById('convertBtn').addEventListener('click', function () {
    const amount = document.getElementById('currencyInput').value;
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;

    // Example conversion logic (use actual API for real-time conversion)
    let conversionRate = 1.2; // Static for now, replace with dynamic API if needed
    let result = amount * conversionRate;

    document.getElementById('currencyResult').innerText = `Result: ${result} ${to}`;
});
