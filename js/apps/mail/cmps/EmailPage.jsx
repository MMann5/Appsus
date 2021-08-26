import { EmailPreview } from './EmailPreview.jsx';

export function EmailPage({
  emails,
  openEmail,
  onToggleStar,
  onDeleteEmail,
  onToggleCompose,
}) {
  return (
    <section>
      <button onClick={onToggleCompose}>
        Compose Or Something I dont care
      </button>
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
