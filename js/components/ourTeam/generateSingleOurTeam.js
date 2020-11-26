import { isValidTeam } from './isValidTeam.js';

function generateSingleOurTeam(team) {
    // input validation

    if (!isValidTeam(team)) {
        return '';
    }
    // logic

    const HTML = `<div class="profile" id="teamProfile">
                    <img src="./img/team/${team.profilePicture}">
                    <div class="profile-social">
                        ${!team.facebook && team.facebook === '' ? '' : `<a href="${team.facebook}"><i class="fab fa-facebook-f"></i></a>`}
                        ${!team.twitter && team.twitter === '' ? '' : `<a href="${team.twitter}"><i class="fab fa-twitter"></i></a>`}
                        ${!team.linkedin && team.linkedin === '' ? '' : `<a href="${team.linkedin}"><i class="fab fa-linkedin-in"></i></a>`}
                    </div>
                    <div class="profile-name-position">
                        <span>${team.name} ${team.surname}</span>
                        <span>${team.position}</span>
                    </div>
                </div>`;
    return HTML;

}

export { generateSingleOurTeam };