import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";


export default function ConfirmComponent( props ){
    const { address, addressInfo, handleConfirm } = props;

    return(
    <div>
        <Typography variant="h6" gutterBottom>
          Shipping information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              disabled={true}
              label={address.logradouro}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={true}
              label={addressInfo}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={true}
              label={address.localidade}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={true}
              label={address.uf}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={true}
              label={address.cep}
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
    </div>
    )
}