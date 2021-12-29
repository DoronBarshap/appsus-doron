// import { Loader } from './Loader.jsx'
import { MailPreview } from './MailPreview.jsx'
import { mailService } from '../services/mail.service.js'

export function MailList({ mails }) {
    // no cars for show
    if (!mails.length) return <h1>There are no mails to show</h1>
    const onSelect = ()=>{console.log('a mail was clicked')}
    
    return (
        <section className="mail-list">
            <h1>Mail List: </h1>
            <h2>Unread emails: <span>{mailService.getNumOfUnReadMails(mails)}</span></h2>
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} onSelect={onSelect}/>)}
        </section>
    )
}
