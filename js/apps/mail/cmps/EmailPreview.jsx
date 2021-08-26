
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
        <table className="table-mail">
          <tr>
            <td className="obj">{email.subject}</td>
            <td className="body" >{email.body}</td>
            <td className="star obj"><input type='checkbox' className='email-starred' onChange={(ev) => onToggleStar(ev, email.id)} /></td>
            <td className="obj"><button className='email-del-btn' onClick={() => onDeleteEmail(email.id)}>Delete</button></td>
          </tr>
        </table>
      </div>
    </section>
  );
}
