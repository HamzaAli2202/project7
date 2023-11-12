import React from "react";
import{Grid,TextField} from "@mui/material"
import{Button} from "@mui/material"
import { Upload } from "./common/Upload";
export const Registration=()=>{
    return(
        <Grid container spacing={2} sx={{border:"5px solid blue",padding:2,bgcolor:""}}>
            <Grid item xs={4}>
                <TextField fullWidth  variant="outlined" label="First Name"/>
            </Grid>
            <Grid item xs={4}>
               <TextField fullWidth variant="outlined" label="Middle Name" /> 
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth variant="outlined" label="Last Name" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth variant="outlined" label="Mobile" />
            </Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="Email" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="House No." />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="Area" />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="City" />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="Pincode" />
            </Grid>
            <Grid item xs={4}>
                <Upload title="Upload Profile Photo" />
            </Grid>
            <Grid item xs={4}>
                <Upload title="Upload Aadhar Card" fullWidth />
            </Grid>
            <Grid item xs={4}>
                <Upload title="Upload Pan Card" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="success" fullWidth>Submit</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="error" fullWidth>Cancel</Button>
            </Grid>

        </Grid>
    )
}