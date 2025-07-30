interface AdminInfos {
  email: string;
  isAdmin: boolean;
  lastname: string;
  firstname: string;
}

export function AdminDashboard({
  email,
  isAdmin,
  firstname,
  lastname,
}: AdminInfos) {
  console.info(email, isAdmin, firstname, lastname);
  return (
    <section>
      <h2>Vos informations</h2>
      <p>Votre email : {email}</p>
      <p>Firstname : {firstname}</p>
      <p>Lastname : {lastname}</p>
      {isAdmin ? (
        <p>Vous etes un administrateur</p>
      ) : (
        <p>Vous n'avez pas les droits administrateur</p>
      )}
    </section>
  );
}
