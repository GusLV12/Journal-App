import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Authlayout } from "../layout/Authlayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useMemo } from "react";

const CustomTextField = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <TextField
        label={label}
        type={type}
        placeholder={placeholder}
        fullWidth
        name={name}
        value={value}
        onChange={onChange} // Asegúrate de manejar los cambios
      />
    </Grid>
  );
};

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "mail@mail.com",
    password: "1234",
  });

  const isAuthenticaticating = useMemo(() => {
    console.log("Checking status: ", status); // Para depuración
    return status === "checking";
  }, [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("Firebase");
    dispatch(startGoogleSignIn());
  };
  return (
    <Authlayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <CustomTextField
            label="Correo"
            type="email"
            placeholder="correo@mail.com"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <CustomTextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
          />

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticaticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticaticating}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </Authlayout>
  );
};
