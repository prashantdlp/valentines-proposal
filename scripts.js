document.getElementById('proposeButton').addEventListener('click', function() {
    document.getElementById('proposal').style.display = 'block';
    document.getElementById('proposeButton').style.display = 'none';
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! You said YES! 💍');
    window.location.reload(); // Reload to show initial page again.
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Oh no! But I’ll always love you! ❤️');
    window.location.reload(); // Reload to show initial page again.
});
