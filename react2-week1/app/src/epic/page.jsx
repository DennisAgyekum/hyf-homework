"use client";

import { useEffect, useState } from "react";

const apiKey = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";

export default function SearchEpicImage() {
    const [date, setDate] = useState(""); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [formattedDate, setFormattedDate] = useState(""); 

    useEffect(() => {
        if (!date) return;

        const fetchEpicImage = async () => {
            setLoading(true);
            setError(null);

            try {
                const dateParts = date.split("-");
                const formattedDate = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
                const url = `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch EPIC images.");
                }

                const data = await response.json();
                if (data.length === 0) {
                    throw new Error("No images found for this date.");
                }

                const firstImage = data[0];
                const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${firstImage.image}.png`;
                setImage(imageUrl);

               
                setFormattedDate(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEpicImage();
    }, [date]);


    const handleDateChange = (e) => {
        setDate(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!date) {
            setError("Please enter a valid date.");
        } else {
            setError(null);
        }
    };

    return (
        <div style={{ marginTop: "20px", marginLeft: "20px", fontFamily: "Arial, sans-serif" }}>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <label htmlFor="dateInput" style={{ marginRight: "10px" }}>Enter Date (MM-DD-YYYY): </label>
                <input
                    id="dateInput"
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                    style={{ marginRight: "10px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <button type="submit" style={{ padding: "5px 10px", borderRadius: "4px", border: "none", backgroundColor: "#007BFF", color: "white", cursor: "pointer" }}>Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {image && !error && (
                <div style={{ textAlign: "center" }}>
                    <p>Image Date: {formattedDate}</p>
                    <img
                        style={{ height: "700px", marginTop: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        src={image}
                        alt={`NASA EPIC Image for ${date}`}
                    />
                </div>
            )}
            {!image && !loading && !error && (
                <p style={{ marginTop: "20px" }}>Please specify a date above.</p>
            )}
        </div>
    );
}