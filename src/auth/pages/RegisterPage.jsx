import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'
import { Authlayout } from "../layout/Authlayout";

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
  return (
    
      <Authlayout title="Crear cuenta">
        <form>
          <Grid container>
          <CustomTextField
              label="Nombre"
              type="text"
              placeholder="nombre..."
            />
            <CustomTextField
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
            />
            <CustomTextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
            />

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
        </Authlayout>
  );
};
