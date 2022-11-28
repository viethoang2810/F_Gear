import React from "react";
import { images } from "../../Components/ImageStore/ImageStore";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import {
  Avatar,
  TextField,
  Grid,
  IconButton,
  FormControl,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
  },
  inputText: {
    borderRadius: "100px",
    "& fieldset": {
      borderRadius: "25px",
    },
  },
  icon: {
    fontSize: 30,
  },
  form: {
    position: "relative",
  },
  userNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "200px",
  },
}));
function HeaderDefault() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "#fff" }}>
      <CssBaseline />
      <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/F_Gear/Login">
          <Avatar src={images.logo} style={{ width: 250, height: 70 }}></Avatar>
        </Link>
        <div style={{ marginRight: "300px" }}>
          <Link to="/" className={classes.link}>
            Store
          </Link>
          <Link to="/about" className={classes.link}>
            About us
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <FormControl className={classes.form}>
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                <TextField
                  variant="outlined"
                  type="text"
                  name="search_by_keyword"
                  placeholder="Search by keyword ..... "
                  inputProps={{
                    style: {
                      padding: "5px 20px",
                      width: 400,
                    },
                  }}
                  className={classes.inputText}
                />
              </Grid>
              <Grid>
                <IconButton
                  aria-label="delete"
                  type="submit"
                  style={{
                    position: "absolute",
                    top: "2px",
                    right: "4px",
                    color: "#333",
                    backgroundColor: "#fff",
                    padding: "6px",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Grid>
            </Grid>
          </FormControl>
        </div>
        <div className={classes.userNav}>
          <Avatar></Avatar>
          <Typography variant="h4" style={{ color: "#333" }}>
            Hi,Username
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderDefault;
