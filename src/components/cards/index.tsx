import classes from "./style.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/modal";
import { getRepositoriesDetails } from "../../store/actions/repository";
import { RepositoryType } from "../../models/repository";

type CardProps = {
  item: RepositoryType;
};

function Card({ item }: CardProps) {
  const dispatch = useDispatch();

  const openModalBox = () => {
    dispatch(openModal());
    dispatch(getRepositoriesDetails(item.owner.login, item.name));
  };

  const languageColorStyle = {
    color: item?.primaryLanguage?.color || "#000",
  };

  return (
    <>
      <div className={classes.card} onClick={openModalBox}>
        <div className={classes.container}>
          <div className={classes.title}>{item.name}</div>
          <div className={classes.owner}>
            <div className={classes.ownerLogin}>{item.owner.login}</div>
            <img
              className={classes.avatar}
              src={item.owner.avatarUrl}
              alt="Avatar"
            />
          </div>
        </div>
        <div className={classes.description}>{item.description}</div>
        <div className="language" style={languageColorStyle}>
          <div className={classes.ownerLogin}>
            {item?.primaryLanguage?.name}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
