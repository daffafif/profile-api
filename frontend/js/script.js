document.addEventListener('DOMContentLoaded', () => {
    fetch('/profile')
        .then(response => response.json())
        .then(data => {
            document.getElementById('full-name').value = data.fullName;
            document.getElementById('gender').value = data.gender;
            document.getElementById('age').value = data.age;
        });

    document.getElementById('profile-pic-input').addEventListener('change', function() {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-pic').src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
    });
});

function updateProfile() {
    const fullName = document.getElementById('full-name').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;

    fetch('/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, gender, age })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Profile updated:', data);
    });
}
