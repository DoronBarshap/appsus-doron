import { mailService } from '../services/mail.service.js'
// import { eventBusService } from '../services/event-bus.service.js'
import { Loader } from '../cmps/Loader.jsx'
import { MailList } from '../cmps/MailList.jsx'
// import { MailFilter } from '../cmps/MailFilter.jsx'
import { Compose } from '../cmps/Compose.jsx'
import { MailEdit } from '../cmps/MailEdit.jsx'
// const { Link } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: null,
        filterBy: null,

    }

    componentDidMount() {
        this.loadMails()
    }

    get ctgSearchParam() {
        const urlSearchParams = new URLSearchParams(this.props.location.search)
        return urlSearchParams.get('ctg')
    }

    get mailsToDisplay() {
        const { mails } = this.state
        // const ctg = this.ctgSearchParam
        // return mails.filter(mail => !ctg || mail.ctg === ctg)
        return mails
    }


    // loadMails = () => {
    //     const { filterBy } = this.state
    //     mailService.query(filterBy).then(mails => {
    //         eventBusService.emit('mails-count', mails.length)
    //         this.setState({ mails })
    //     })
    // }
    loadMails = () => {
        mailService.query().then(mails => {
            // eventBusService.emit('mails-count', mails.length)
            this.setState({ mails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

    onCompose = () => {
        mailService.composeMail()
    }

    render() {
        const { mails } = this.state

        if (!mails) return <Loader />
        return (
            <section className="mail-app">
                <h1>Mail App:</h1><button onClick={this.onCompose}>Compose</button>
               <MailEdit />
                {/* <MailFilter onSetFilter={this.onSetFilter} /> */}
                {/* <Link className="primary-btn clean-link" to="/mail/edit">Add mail</Link> */}
                {/* <Compose /> */}
                <MailList mails={this.mailsToDisplay} />
            </section>
        )
    }
}