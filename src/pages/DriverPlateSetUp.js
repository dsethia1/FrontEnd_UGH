import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DriverPlateSetUp.module.css";

const DriverPlateSetUp = () => {
  const navigate = useNavigate();

  const onDriverPlateSetUpClick = useCallback(() => {
    navigate("/detection-complete");
  }, [navigate]);

  return (
    <div className={styles.driverPlateSetUp} onClick={onDriverPlateSetUpClick}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.qrCodeWallStickersVinylDe} />
        <div className={styles.loading}>Loading...</div>
        <div className={styles.frameItem} />
        <div
          className={styles.pleaseScanYour}
        >{`Please scan your car, with it fitting into the frame below `}</div>
        <div className={styles.frameInner} />
        <div className={styles.completeYourProfile}>Complete your profile</div>
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
      </div>
    </div>
  );
};

export default DriverPlateSetUp;
