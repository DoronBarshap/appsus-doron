// import { eventBusService } from '../services/event-bus.service.js';

const {NavLink, withRouter} = ReactRouterDOM;

class _AppHeader extends React.Component {
    render(){
    return (
        <section className="app-header flex space-between align-center">
            <div className="header-container flex align-center">
                <h1 onClick={() => this.props.history.push('/')}>AppSus</h1>
            <nav className="app-nav flex align-center">
                <NavLink className="nav-btn" to="/mail">Email</NavLink>
                <NavLink className="nav-btn" to="/keep">Notes</NavLink>
                <NavLink className="nav-btn" to="/book">Books</NavLink>
            </nav>
            </div>
        </section>
    );
    }
}

export const AppHeader = withRouter(_AppHeader);