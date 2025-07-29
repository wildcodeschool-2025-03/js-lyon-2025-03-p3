import "./CheckoutButton.css";

function CheckoutButton() {
  const handleClick = async () => {
    const res = await fetch(
      "http://localhost:3310/api/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
    );
    const data = await res.json();
    window.location.href = data.url; // Redirection vers la page Stripe
  };

  return (
    <button type="button" onClick={handleClick}>
      Payer maintenant
    </button>
  );
}

export default CheckoutButton;
