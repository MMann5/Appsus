import { EmailPreview } from './EmailPreview.jsx';

export function EmailPage({
  emails,
  openEmail,
  onToggleStar,
  onDeleteEmail,
  onToggleCompose,
  isSentEmail,
  onToggleSentEmails,
  getBack,
}) {
  return (
    <section>
      {!isSentEmail ? (
        <div>
          <button onClick={onToggleCompose}>
            Compose Or Something I dont care
          </button>
          <button onClick={onToggleSentEmails}>sentMail</button>
        </div>
      ) : (
        <div>
          <button onClick={getBack}>Go back to inbox</button>
        </div>
      )}
      <div className='emails'>
        {emails.map((email) => (
          <EmailPreview
            key={email.id}
            email={email}
            openEmail={openEmail}
            onToggleStar={onToggleStar}
            onDeleteEmail={onDeleteEmail}
          />
        ))}
      </div>
    </section>
  );
}
