import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
    container
    direction='row'
    justifyContent='space-between'
    sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={ 39 } fontWeight='light'>yhbuhbdyubfiubiufbhiu hbui hbiuwb hiufh uhuieh </Typography>
      </Grid>

      <Grid item>
        <Button color='primary' sx={{ padding: 2}}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField 
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="Ingrese título"
        label='Título'
        sx={{ border: 'none', mb: 1 }}
        />
        <TextField 
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="¿Qué sucedió el dia de hoy?"
        minRows={ 5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
