export function EmailDetail({ email, getBack }) {
  return (
    <section>
      <div onClick={getBack}>{JSON.stringify(email)}</div>
    </section>
  );
}
