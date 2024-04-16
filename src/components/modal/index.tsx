import { useSelector } from "react-redux";
import classes from "./style.module.css";
import { ReducersState } from "../../store/reducers";
import {
  GitFork,
  GitPullRequest,
  Plus,
  WarningCircle,
} from "@phosphor-icons/react";
import Loading from "../loading";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ isOpen, onClose }: ModalProps) {
  const { dataDetails, loadingDetails } = useSelector(
    (state: ReducersState) => {
      return {
        dataDetails: state.Repository.dataDetails,
        loadingDetails: state.Repository.loadingDetails,
      };
    }
  );

  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {loadingDetails ? (
          <Loading />
        ) : (
          <>
            <div className={classes.firstContainer}>
              <div className={classes.modalTitle}>{dataDetails?.name}</div>
              <div className={classes.languageContainer}>
                <div
                  className={classes.languageColor}
                  style={{
                    backgroundColor: dataDetails?.primaryLanguage?.color,
                  }}
                ></div>
                <div className={classes.language}>
                  {dataDetails?.primaryLanguage?.name}
                </div>
              </div>
            </div>
            <div className={classes.modalTitle}>{dataDetails?.description}</div>
            <div className={classes.repoInfoContainer}>
              <div className={classes.modalItem}>
                <GitFork className={classes.icons} size={16} />
                <label>Forks:</label>
                <span>{dataDetails?.forks.totalCount}</span>
              </div>
              <div className={classes.modalItem}>
                <GitPullRequest className={classes.icons} size={16} />
                <label>Pull Requests:</label>
                <span>{dataDetails?.pullRequests.totalCount}</span>
              </div>
              <div className={classes.modalItem}>
                <WarningCircle className={classes.icons} size={16} />
                <label>Issues:</label>
                <span>{dataDetails?.issues.totalCount}</span>
              </div>
            </div>
            <div
              className={classes.viewMore}
              onClick={() => window.open(dataDetails?.url)}
            >
              <Plus size={12} />
              <label className={classes.viewMoreLabel}>ver mais</label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Modal;
