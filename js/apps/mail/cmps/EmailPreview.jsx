
export function EmailPreview({
  email,
  openEmail,
  onToggleStar,
  onDeleteEmail,
}) {
  return (
    <section className='email-showcase'>
      <table className="table-mail">
        <tbody>
        <tr>
          <div
            className={`email-window ${email.isRead ? 'read' : ''}`}
            onClick={(ev) => {
              openEmail(ev, email);
            }}
          >
            <td className="obj">{email.subject}</td>
            <td className="body" >{email.body}</td>
            {/* <td className="mailto">{email.to}</td> */}
          </div>

          <td className="star obj"><input type='checkbox' className='email-starred' onChange={(ev) => onToggleStar(ev, email.id)} /></td>
          <td><button className="fa fa-trash fa-2x" onClick={() => onDeleteEmail(email.id)}></button></td>
        </tr>
        </tbody>
      </table>
    </section>
  );
}
