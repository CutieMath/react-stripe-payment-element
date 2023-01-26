import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // First, get the public key from the server
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
    </>
  );
}

export default Payment;
