document.addEventListener('DOMContentLoaded', function () {
    // Hent reference til formularen med id'en 'create-profil'
    let form = document.querySelector('#create-profil');

    // Hent reference til inputfeltet med klassen 'contact-input'
    let messageInput = document.querySelector('.contact-input');

    // Hent reference til containeren, hvor beskeden vil blive vist
    let messageContainer = document.querySelector('.msg');

    // Hent reference til inputfeltet med attributten name='firstName'
    let firstNameInput = document.querySelector('input[name="firstName"]');

    // Lyt efter, når formularen bliver indsendt
    form.addEventListener('submit', function (e) {
        // Forhindrer formularen i at blive indsendt på traditionel vis
        e.preventDefault();

        // Tjek om længden af beskeden er mindst 15 tegn
        if (messageInput.value.length >= 15) {
            // Opdater indholdet af beskedcontaineren med en personlig besked
            messageContainer.innerText = `Kære ${firstNameInput.value}! \nDin besked er nu sendt til os. Vi vil svare på din henvendelse hurtigst muligt.\nMed venlig hilsen\nTeamet bag Hydro Renew`;
        }
    });
});