import { generateSingleOurTeam } from './generateSingleOurTeam.js';

function renderOurTeam (data) {

    // input validation

    // logic
    let HTML = ``;
    const teamHpDOM = document.querySelector(data.selector.hp);
    const teamStaticDOM = document.querySelector(data.selector.static);
    if(!teamHpDOM && !teamStaticDOM){
        return;
    }
    if (!teamStaticDOM) {
        for (let i = 0; i < 3; i++) {
            HTML += generateSingleOurTeam(data.team[i]);
        }
        return teamHpDOM.innerHTML = HTML;
    } else {
        for (let i = 0; i < data.team.length; i++) {
            HTML += generateSingleOurTeam(data.team[i]);
        }
        return teamStaticDOM.innerHTML = HTML;
    }

}

export { renderOurTeam };
