import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Authlayout } from "../layout/Authlayout";
import { useForm } from "../../hooks";

const formData = {
  email: "mail@mail.com",
  password: "1234",
  displayName: "Jhon Doe",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener un @"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe ser mayor a 6 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

const CustomTextField = ({ label, type, placeholder }) => {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <TextField
        label={label}
        type={type}
        placeholder={placeholder}
        fullWidth
      />
    </Grid>
  );
};

export const RegisterPage = () => {
  const {
    formState,
    email,
    password,
    displayName,
    onInputChange,
    isFormValid,
    diplayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Authlayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <CustomTextField
            label="Nombre"
            type="text"
            placeholder="nombre..."
            name="displayName"
            value={displayName}
            onInputChange={onInputChange}
          />
          <CustomTextField
            label="Correo"
            type="email"
            placeholder="correo@mail.com"
            name="email"
            value={email}
            onInputChange={onInputChange}
          />
          <CustomTextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onInputChange={onInputChange}
          />

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </Authlayout>
  );
};
