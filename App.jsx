
import { AppHome } from './js/pages/app-home.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter.jsx';

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
        </main>
        <footer>
            <AppFooter/>
        </footer>
    </Router>
    )
}