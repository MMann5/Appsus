import { EmailPreview } from './EmailPreview.jsx';
import { EmailFilter } from './EmailFilter.jsx';
export function EmailPage({
  emails,
  openEmail,
  onToggleStar,
  onDeleteEmail,
  onToggleCompose,
  isSentEmail,
  onToggleSentEmails,
  getBack,
  setFilterBy,
}) {
  return (
    <section>
      <EmailFilter
        setFilterBy={setFilterBy}
        isSentEmail={isSentEmail}
      />
      {!isSentEmail ? (
        <div>
          <button onClick={onToggleCompose}>
            Compose
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
