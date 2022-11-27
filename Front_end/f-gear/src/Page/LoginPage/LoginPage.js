import FormWrapper from "../../Components/Form/FormWrapper";
import classNames from "classnames/bind";
import styles from "./LoginPage.module.scss";
//import TextInput from "../../Components/TextInput/TextInput";
import { Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ButtonWrapper from "../../Components/ButtonWrapper/ButtonWrapper";

const cx = classNames.bind(styles);

function LoginPage() {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit,
      width: 300,
      margin: 100,
      fontSize: 1, //??? Doesnt work
    },
    //style for font size
    resize: {
      fontSize: 50,
    },
  };
  const [ user, setUser ] = useState({
    username: "",
    password: "",
  });


  return (
    <div className={cx("wrapper")}>
      <FormWrapper>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "spacebetween",
          }}
        >
          <Grid item>
            <TextField
              label="Username"
              variant="outlined"
              className={styles.resize}
              style={{ width: 450 }}
              type="Text"
              name="Username"
              onChange={(e) => {
                                 
                                 setUser({...user , username:e.target.value})
                                }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              variant="outlined"
              className={styles.resize}
              style={{ width: 450 }}
              type="password"
              name="Password"
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 10,
                     width:130,
                     marginTop:10
                  }}
          >
            Log in
          </Button>

        </Grid>
      </FormWrapper>
    </div>
  );
}

export default LoginPage;
