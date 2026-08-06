export default function Hero() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "100px 40px"
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 400
        }}
      >
        Unlimited Movies
      </h2>

      <p
        style={{
          fontSize: "10px",
          maxWidth: "260px"
        }}
      >
        Watch thousands of blockbuster movies and TV shows from anywhere.
      </p>

      <button
        style={{
          background: "#FFD54F",
          color: "#FFFFFF",
          border: "none",
          padding: "14px 28px"
        }}
      >
        Get Started
      </button>
    </section>
  );
}
