import { mailService } from '../services/mail.service.js'
// import { eventBusService } from '../services/event-bus.service.js'
import { Loader } from '../cmps/Loader.jsx'
import { MailList } from '../cmps/MailList.jsx'
// import { MailFilter } from '../cmps/MailFilter.jsx'

// const { Link } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadMails()
        console.log('component did mount')
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

    render() {
        console.log('i am in mail app')
        const { mails } = this.state
        
        if (!mails) return <Loader />
        return (
            <section className="mail-app">
                <h1>Mail App:</h1>
                {/* <MailFilter onSetFilter={this.onSetFilter} /> */}
                {/* <Link className="primary-btn clean-link" to="/mail/edit">Add mail</Link> */}
                
                <MailList mails={this.mailsToDisplay} />
            </section>
        )
    }
}