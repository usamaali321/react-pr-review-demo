export default function Hero() {
  return (
    <section
      style={{
        width: "1400px",
        padding: "120px",
        background: "#00BCD4"
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 300,
          color: "#F44336"
        }}
      >
        Unlimited Movies
      </h2>

      <p
        style={{
          fontSize: "10px",
          width: "250px",
          color: "#4CAF50",
          lineHeight: 1
        }}
      >
        Watch thousands of blockbuster movies and TV shows anywhere in the world.
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
