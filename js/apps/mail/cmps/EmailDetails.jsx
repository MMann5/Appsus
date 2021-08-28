export function EmailDetail({ email, getBack, isSentEmail }) {
  return (
    <section>
      <div onClick={getBack}>
        <h4>
          {isSentEmail ? 'To: ' : 'From: '}
          {email.to}
        </h4>
        <h4>
          Date: {new Date(email.sentAt).toLocaleDateString('en-GB')}
        </h4>
        <h3> {email.subject} </h3>
        <h6>{email.body}</h6>
      </div>
    </section>
  );
}
