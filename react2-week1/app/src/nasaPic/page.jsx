import React from "react";

const API_KEY = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";

export default async function NasaPicOfTheDay() {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Astronomy picture not found");
  }
  const data = await response.json();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <section>
        <h2 style={{ color: "#fff" }}>Astronomy Picture of the Day</h2>
        <div>
          <h3 style={{ color: "#fff" }}>{data.title}</h3>
          <div>
            <img src={data.url} alt="NASA Astronomy Pic" style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }} />
            <p style={{ color: "#fff", marginTop: "10px" }}>{data.explanation}</p>
          </div>
        </div>
      </section>
    </div>
  );
}