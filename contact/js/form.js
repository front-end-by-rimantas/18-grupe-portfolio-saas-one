function form() {

    const buttonDOM = document.querySelector('#button');
    buttonDOM.addEventListener('click', (e) => {
        e.preventDefault();
        const nameDOM = document.querySelector('#name');
        const lastnameDOM = document.querySelector('#lastname');
        const emailDOM = document.querySelector('#email');
        const commentDOM = document.querySelector('#comment');

        if (nameDOM.value.includes('<')) {
            nameDOM.setAttribute("style", "background-color: red;")
            return;
        }
        if (lastnameDOM.value.includes('<')) {
            lastnameDOM.setAttribute("style", "background-color: red;")
            return;
        }
        if (emailDOM.value.includes('<')) {
            emailDOM.setAttribute("style", "background-color: red;")
            return;
        }
        if (commentDOM.value.includes('<')) {
            commentDOM.setAttribute("style", "background-color: red;")
            return;
        } else {
            commentDOM.setAttribute("style", "background-color: #f9f9f996;")
        }
        if (Number(nameDOM.value)) {
            nameDOM.setAttribute("style", "background-color: red;")
            return;
        }
        if (Number(lastnameDOM.value)) {
            lastnameDOM.setAttribute("style", "background-color: red;")
            return;
        }
        if (!/(.+)@(.+){2,}\.(.+){2,}/.test(emailDOM.value)) {
            emailDOM.setAttribute("style", "background-color: red;")
            return;
        }

        let name = '';
        let lastname = '';
        let email = '';
        let comment = '';

        name += nameDOM.value;
        lastname += lastnameDOM.value;
        email += emailDOM.value;
        comment += commentDOM.value;

        const messageDOM = document.querySelector('#message')
        const HTML = `<div class="message">
        <button id="close"><a class="fas fa-times"></a></button>
        <p class="message-style">Linkėjimus jums siunčia: <p>${name} ${lastname}</p></p>
        <p class="message-style">Jeigu perskaičius žinutę norėsi atsišaudyti, štai žmogaus email: <p>${email}</p></p>
        <p class="message-style">Jums skirta žinutė: <p>${comment}</p></p>
        </div>`;
        messageDOM.innerHTML = HTML;
        const closeDOM = document.querySelector('#close');
        closeDOM.addEventListener('click', (e) => {
            e.preventDefault();
            const closeHTML = `<div class="message"></div>`
            messageDOM.innerHTML = closeHTML
        })
    });

};
export { form }