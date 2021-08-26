
export function EmailPreview({
  email,
  openEmail,
  onToggleStar,
  onDeleteEmail,
}) {
  return (
    <section className='email-showcase'>
      <table className="table-mail">
        <tr>
          <div
            className={`email-window ${email.isRead ? 'read' : ''}`}
            onClick={(ev) => {
              openEmail(ev, email);
            }}
          >
            <td className="obj">{email.subject}</td>
            <td className="body" >{email.body}</td>
          </div>

          <td className="star obj"><input type='checkbox' className='email-starred' onChange={(ev) => onToggleStar(ev, email.id)} /></td>
          <td className="obj"><button className='btn' onClick={() => onDeleteEmail(email.id)}>Delete</button></td>
        </tr>
      </table>
    </section>
  );
}
