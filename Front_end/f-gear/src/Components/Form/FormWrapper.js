import classNames from "classnames/bind";
import styles from "./FormWrapper.module.scss";
import ButtonIcon from "../ButtonWrapper/ButtonIcon/ButtonIcon";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

import { images } from "../ImageStore/ImageStore";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";

const cx = classNames.bind(styles);

function FormWrapper({ children }) {
  return (
    <Card
      style={{
        width: 600,
        height: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #333",
        borderRadius:15 
      }}
    >
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar src={images.logo} style={{ width: 400, height: 140 }}></Avatar>
        <form className={cx("form-wrapper")}>{children}</form>
        <Typography variant="subtitle1" style={{marginTop:10 , marginBottom:5}}>Choose another account</Typography>
        <ButtonWrapper>
          <ButtonIcon link={images.google} ></ButtonIcon>
          <ButtonIcon link={images.facebook}></ButtonIcon>
        </ButtonWrapper>
        <Typography 
                    variant="subtitle1" 
                    style={{marginTop:10 , marginBottom:5,cursor:'pointer',fontWeight:600}} className={cx('reset_password')}
        >
            Forgot password ? 
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FormWrapper;
