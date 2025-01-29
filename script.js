document.addEventListener('DOMContentLoaded', function () {
    const DateTime = luxon.DateTime;
    const flatpickr = window.flatpickr;

    flatpickr("#birthdate", {
        dateFormat: "d/m/Y",
        maxDate: "today",
        locale: "es"
    });

    const form = document.getElementById('ageCalculatorForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const birthdateInput = document.getElementById('birthdate').value;

        if (!birthdateInput) {
            alert("Por favor, ingresa una fecha de nacimiento válida.");
            return;
        }

        const birthdate = DateTime.fromFormat(birthdateInput, 'dd/MM/yyyy');
        const now = DateTime.now();

        if (!birthdate.isValid) {
            alert("Fecha de nacimiento no válida. Por favor, ingresa una fecha correcta.");
            return;
        }

        const age = now.diff(birthdate, ['years', 'months', 'days']).toObject();

        resultDiv.innerHTML = `
            Tienes ${Math.floor(age.years)} años, 
            ${Math.floor(age.months)} meses y 
            ${Math.floor(age.days)} días.
        `;
    });
});