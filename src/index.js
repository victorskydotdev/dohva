import './scss/main.scss';

import { runAlertService } from './app/app';
import { loadNavbar } from './app/navbar';
import { loadFooter } from './app/footer';
import { undoFooterMargin } from './app/app';
import { runTransitions } from './app/page-trainsition';
import { formInteraction } from './app/quote-form';
import { showTeamProfile } from './app/team-profile';

loadNavbar();
loadFooter();
undoFooterMargin();
// runAlertService(alertMessage);

runTransitions();
formInteraction();
showTeamProfile();
