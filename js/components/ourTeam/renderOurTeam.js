import { generateSingleOurTeam } from './generateSingleOurTeam.js';

function renderOurTeam (data) {

    // input validation

    // logic
    let HTML = '';
    const teamDOM = document.querySelectorAll(data.selector);
    for (var i = 0; i < 3; i++) {
        teamDOM[i].innerHTML = generateSingleOurTeam(data.team[i])
    }
    return HTML;
}

export { renderOurTeam };
