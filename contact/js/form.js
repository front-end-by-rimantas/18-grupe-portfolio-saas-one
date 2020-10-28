function form() {
    const buttonDOM = document.querySelector('#button');
    
    buttonDOM.addEventListener('click', (e) => {
        e.preventDefault();
        const nameDOM = document.querySelector('#name');
        const lastnameDOM = document.querySelector('#lastname');
        const emailDOM = document.querySelector('#email');
        const commentDOM = document.querySelector('#comment');

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
        <h3>Rimantai,</h3>
        <p>Linkėjimus jums siunčia: ${name} ${lastname}</p>
        <p>Jeigu perskaičius žinutę norėsi atsišaudyti, štai žmogaus email: ${email}</p>
        <p>Jums skirta žinutė: ${comment}</p>
        </div>`;
        return messageDOM.innerHTML = HTML;
    });
};
export { form }