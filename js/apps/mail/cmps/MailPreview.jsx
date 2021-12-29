
// const { Link } = ReactRouterDOM


export function MailPreview(props) {
    const {mail} = props
    const { onSelect } = props
    // console.log('onSelect: ', {onSelect})

    return (
        // <Link className="clean-link" to={`/car/${car.id}`}>
        <article className="mail-preview" onSelect={onSelect}> 
            <h2>to: <span>{mail.to}</span></h2>
            <h2>Subject: <span>{mail.subject}</span></h2>
            <h2>Content: <span>{mail.body}</span></h2>
            <h2>is read: {mail.isRead ? 'YES' : 'NO'}</h2>
        </article>
        // </Link>
    )
}