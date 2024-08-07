document.addEventListener('DOMContentLoaded', function() {
    const personElement = document.getElementById('person');
    const persons = ['Jorge', 'Enevy'];
    
    const startDate = new Date('2024-08-06');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const personIndex = diffDays % persons.length;
    personElement.textContent = persons[personIndex];
});
