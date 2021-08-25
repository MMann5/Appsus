import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({ emails }) {
  return (
    <section className='emails'>
      {emails.map((email) => (
        <EmailPreview key={email.id} email={email} />
      ))}
    </section>
  );
}
