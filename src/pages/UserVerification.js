import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./UserVerification.module.css";

const UserVerification = () => {
  const navigate = useNavigate();

  const onUserVerificationContainerClick = useCallback(() => {
    navigate("/succesful-verification");
  }, [navigate]);

  const onSkipClick = useCallback(() => {
    navigate("/failed-verification");
  }, [navigate]);

  return (
    <div
      className={styles.userVerification}
      onClick={onUserVerificationContainerClick}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <Button
          className={styles.skip}
          sx={{ width: 45 }}
          color="primary"
          variant="text"
          onClick={onSkipClick}
        >{`Skip `}</Button>
        <div className={styles.loading}>Loading...</div>
        <div className={styles.qrCodeWallStickersVinylDe} />
        <div className={styles.frameItem} />
        <div
          className={styles.pleaseScanThe}
        >{`Please scan the driver’s car, with it fitting into the frame below `}</div>
        <div className={styles.frameInner} />
        <div className={styles.driverVerification}>Driver Verification</div>
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
      </div>
    </div>
  );
};

export default UserVerification;
