// Simple Form Alert when user submits booking request
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Shukriya! Aap ki request bhej di gayi hai. Hum aap se jald raabta karenge.');
    this.reset();
});