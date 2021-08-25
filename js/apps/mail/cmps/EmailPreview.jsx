const { Link } = ReactRouterDOM;

export function EmailPreview({ email }) {
  return (
    <article
      className={`email-window ${email.isRead ? 'read' : ''}`}
    >
      <Link className='email-details' to={`/mail/${email.id}`}>
        <h4 className='single-email-subject'>{email.subject}</h4>
        <h4 className='single-email-body'>{email.body}</h4>
      </Link>
    </article>
  );
}
