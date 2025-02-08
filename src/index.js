import './scss/main.scss';

import { runAlertService } from './app/app';
import { loadNavbar } from './app/navbar';
import { loadFooter } from './app/footer';
import { undoFooterMargin } from './app/app';
import { runTransitions } from './app/page-trainsition';

loadNavbar();
loadFooter();
undoFooterMargin();
// runAlertService(alertMessage);

runTransitions();
