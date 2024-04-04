function send(msg) {
    let message = document.createElement('div');
    message.className = 'message';

    message.innerHTML = `
   <input type= 'checkbox'>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
        viewBox="0 0 16 16">
        <path
       d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
       <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
    </svg>

    <p>${msg.title}</p>
    <p>${msg.subject}</p>
    `;

    document.getElementById('messagebox').appendChild(message);
}
send({
    title: 'Zomato',
    subject: 'Are you Hungry ! hurry up what are you waiting for then',
});
send({
    title: 'Swiggy',
    subject: 'new deliveries for you',
    
});
send({
     title: 'Grow',
     subject: 'statements of accounts of funda nad balances',
     
});
send({
    title: 'Linkdln',
    subject: 'tata consultancy services',
});
send({
    title: 'simplilearn',
    subject: 'celebrate holi with a flat scholarship',
});
send({
    title: 'swiggy',
    subject: 'welcome to the winners club',
});
send({
    title: 'services',
    subject: 'Transaction in your demant account',
});
send({
    title: 'Team scaler',
    subject: 'fundamnetals of Docker and Kubernetes',
});
send({
    title: 'Team scaler',
    subject: 'fundamnetals of Docker and Kubernetes',
});
send({
    title: 'Team scaler',
    subject: 'fundamnetals of Docker and Kubernetes',
});
send({
    title: 'Team scaler',
    subject: 'fundamnetals of Docker and Kubernetes',
});
send({
    title: 'Team scaler',
    subject: 'fundamnetals of Docker and Kubernetes',
});
send({
    title: 'Team scaler',
    subject: 'fundamnetals of Docker and Kubernetes',
});

const composeButton = document.getElementById('compose-button');
const composeModal = document.getElementById('compose-modal');
const overlay = document.getElementById('overlay');

composeButton.addEventListener('click', function() {
    // Show the modal and overlay
    composeModal.style.display = 'block';
    overlay.style.display = 'block';
});

// Function to handle form submission
document.getElementById('compose-email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const emailData = {
        to: formData.get('to'),
        subject: formData.get('subject'),
        body: formData.get('body')
    };

    // Store email data in localStorage
    let sentEmails = JSON.parse(localStorage.getItem('sentEmails')) || [];
    sentEmails.push(emailData);
    localStorage.setItem('sentEmails', JSON.stringify(sentEmails));

    // Clear form fields
    this.reset();
    
    // Hide the modal and overlay after submission
    composeModal.style.display = 'none';
    overlay.style.display = 'none';

    // Show success message
    alert('Email sent successfully and saved!');
});

// Close the modal when clicking outside of it
overlay.addEventListener('click', function() {
    composeModal.style.display = 'none';
    overlay.style.display = 'none';
});

