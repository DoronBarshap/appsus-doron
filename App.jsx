
import { AppHome } from './js/pages/app-home.jsx';
import { AppHeader } from './js/cmps/AppHeader.jsx';
import { AppFooter } from './js/cmps/AppFooter.jsx';
import { MailApp } from 'apps/mail/pages/mail-index.jsx';
import { KeepApp } from 'apps/keep/pages/note-index.jsx';
import { BookApp } from 'apps/book/pages/book-index.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App(){
    return(
    <Router>
        <header>
            <AppHeader/>
        </header>
        <main className="app-main">
            <Route component={AppHome} path="/"/>
            <Route component={MailApp} path="/mail"/>
            <Route component={KeepApp} path="/keep"/>
            <Route component={BookApp} path="/book"/>
        </main>
        <footer>
            <AppFooter/>
        </footer>
    </Router>
    );
}