function CreateUser() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" name="password" required />
      <button type="button">Créer le Compte </button>
    </form>
  );
}
export default CreateUser;
