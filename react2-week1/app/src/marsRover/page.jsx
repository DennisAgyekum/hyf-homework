"use client";

import React, { useState, useEffect } from "react";

const API_KEY = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";

const NASA_URLs = {
    marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({ src, date, roverName }) => {
    return (
        <div style={styles.photoContainer}>
            <img src={src} alt={`Rover: ${roverName} on ${date}`} style={styles.photo} />
            <p>{`Date: ${date}`}</p>
            <p>{`Rover: ${roverName}`}</p>
        </div>
    );
};

const RoverPhotoPage = () => {
    const [roverPhotos, setRoverPhotos] = useState({ photos: [] });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            try {
                const response = await fetch(NASA_URLs.marsRoverPhoto);
                const data = await response.json();
                setRoverPhotos(data);
            } catch (error) {
                setError("Error fetching Mars rover photos.");
                console.error("Error fetching Mars rover photos:", error);
            }
        };

        fetchRoverPhotos();
    }, []);

    return (
        <div style={styles.pageContainer}>
            <main>
                <section>
                    <h2>Rover Photos</h2>
                    {error ? (
                        <p>{error}</p>
                    ) : roverPhotos.photos.length ? (
                        <div style={styles.photosGrid}>
                            {roverPhotos.photos.map((item) => (
                                <div key={item.id}>
                                    <RoverPhoto
                                        src={item.img_src}
                                        date={item.earth_date}
                                        roverName={item.rover.name}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading rover photos...</p>
                    )}
                </section>
            </main>
        </div>
    );
};

const styles = {
    pageContainer: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center',
    },
    photosGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    photo: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
};

export default RoverPhotoPage;