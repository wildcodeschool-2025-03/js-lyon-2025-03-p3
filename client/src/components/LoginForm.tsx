function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="username">Email:</label>
        <input type="email" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
