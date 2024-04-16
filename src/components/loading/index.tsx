import { Spinner } from "@phosphor-icons/react";
import styles from "./style.module.css";

function Loading() {
  return (
    <div className={`flex items-center justify-center ${styles.loading}`}>
      <Spinner className={styles.spinner} size={48} />
    </div>
  );
}

export default Loading;
