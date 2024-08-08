import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { ImageGallery } from "../components";

export const NoteView: FC = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto, 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          fullWidth
          label="Título"
          variant="filled"
          placeholder="Título de la nota"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          fullWidth
          multiline
          variant="filled"
          placeholder="¿Que sucedio el dia de hoy?"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
