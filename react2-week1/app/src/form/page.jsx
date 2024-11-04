"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";

const InputField = ({ label, name, type, value, onChange, error }) => (
    <Grid item xs={12}>
        <TextField
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
            variant="outlined"
            error={Boolean(error)}
            helperText={error}
            required
            InputLabelProps={{ style: { color: '#ffffff' } }} 
            InputProps={{
                style: { color: '#ffffff' }, 
                sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555', 
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#007BFF', 
                    },
                },
            }}
        />
    </Grid>
);

export default function FormPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateFormFields = () => {
        const newFormErrors = {};
        if (!formData.firstName) newFormErrors.firstName = "First name is required";
        if (!formData.lastName) newFormErrors.lastName = "Last name is required";
        if (!formData.phone.match(/^\d+$/)) newFormErrors.phone = "Phone number must be digits only";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) newFormErrors.email = "Email format is invalid";
        setFormErrors(newFormErrors);
        return Object.keys(newFormErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateFormFields()) {
            router.push("/");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#121212" }}>
            <form onSubmit={handleFormSubmit} style={{ maxWidth: "400px", width: "100%", padding: "20px", border: "1px solid #555", borderRadius: "10px", backgroundColor: "#1E1E1E" }}>
                <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "20px", color: "#ffffff" }}>Sign Up</Typography>
                <Grid container spacing={2}>
                    {[
                        { label: "First Name", name: "firstName", type: "text", error: formErrors.firstName },
                        { label: "Last Name", name: "lastName", type: "text", error: formErrors.lastName },
                        { label: "Phone Number", name: "phone", type: "text", error: formErrors.phone },
                        { label: "Email", name: "email", type: "email", error: formErrors.email }
                    ].map(({ label, name, type, error }, index) => (
                        <InputField
                            key={index}
                            label={label}
                            name={name}
                            type={type}
                            value={formData[name]}
                            onChange={handleChange}
                            error={error}
                        />
                    ))}
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "20px", width: "100%" }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
}