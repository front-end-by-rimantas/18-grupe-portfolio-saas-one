import { generateSingleOurTeam } from './generateSingleOurTeam.js';
function renderOurTeam (data) {

    // input validation

    // logic
    let HTML = '';
    const teamDOM = document.querySelectorAll(data.selector);
    const teamCount = data.team.length;

    for(let i=0; i < teamCount; i++){
        const team = data.team[i];
        teamDOM[i].innerHTML = generateSingleOurTeam(team);
    }
    return HTML;
}

export { renderOurTeam };