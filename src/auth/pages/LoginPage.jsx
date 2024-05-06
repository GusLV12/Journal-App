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

export const LoginPage = () => {
  return (
    
      <Authlayout title="Login">
        <form>
          <Grid container>
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
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
        </Authlayout>
  );
};
