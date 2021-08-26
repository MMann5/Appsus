const { Link } = ReactRouterDOM;

export function EmailPreview({
  email,
  openEmail,
  onToggleStar,
  onDeleteEmail,
}) {
  return (
    <section className='email-showcase'>
      <div
        className={`email-window ${email.isRead ? 'read' : ''}`}
        onClick={(ev) => {
          openEmail(ev, email);
        }}
      >
        <span className='email-subject'>{email.subject}</span>
      </div>
      <div className='ctrls'>
        <input
          type='checkbox'
          className='email-starred'
          onChange={(ev) => onToggleStar(ev, email.id)}
        />
        <button
          className='email-del-btn'
          onClick={() => onDeleteEmail(email.id)}
        >
          Delete
        </button>
      </div>
    </section>
  );
}
