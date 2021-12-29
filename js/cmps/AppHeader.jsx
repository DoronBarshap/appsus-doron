import { eventBusService } from '../services/event-bus.service.js';

const {Link, NavLink, withRouter} = reactRouterDom;

const _AppHeader = (props) => {
    return (
        <section className="main-header">
            <div className="header">
                <h1>AppSus</h1>
            </div>
            <nav className="header-nav">
                <NavLink className="nav-btn" to="/mail" onClick={()=> props.onToggleMenu()}>Email</NavLink>
                <NavLink className="nav-btn" to="/keep" onClick={()=> props.onToggleMenu()}>Notes</NavLink>
                <NavLink className="nav-btn" to="/book" onClick={()=> props.onToggleMenu()}>Books</NavLink>
            </nav>
        </section>
    )
}

export const AppHeader = withRouter(_AppHeader);