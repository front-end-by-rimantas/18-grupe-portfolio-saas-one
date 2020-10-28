function form() {
    const nameDOM = document.getElementById('#name').value;
    const lastnameDOM = document.getElementById('#lastname').value;
    const emailDOM = document.getElementById('#email').value;
    const commentDOM = document.getElementById('#comment').value;
    const buttonDOM = document.getElementById('#button').value;

    // nameDOM.value = name;
    // lastnameDOM.value = lastname;
    // emailDOM.value = email;
    // commentDOM.value = comment;

    console.log(name);
    console.log(lastname);
    console.log(email);
    console.log(comment);

    buttonDOM.addEventListener('click', (e) => {
        console.log(e.preventDefault());

        const messageDOM = document.getElementById('#message')
        const HTML = `<div class="message">
                    <h3>Rimantai,</h3>
                    <p>Linkėjimus jums siunčia ${name, lastname}</p>
                    <p>Jeigu perskaičius žinutę norėsi atsišaudyti, štai žmogaus email: ${email}</p>
                    <p>Jums skirta žinutė: ${message}</p>
                </div>`;
        return messageDOM.innerHTML = HTML;
    });
};
export { form }