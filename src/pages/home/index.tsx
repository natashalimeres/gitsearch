import { GithubLogo, SmileySad } from "@phosphor-icons/react";
import classes from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ReducersState } from "../../store/reducers";
import { getRepositories } from "../../store/actions/repository";
import { useEffect, useRef } from "react";
import Card from "../../components/cards";
import Loading from "../../components/loading";
import Modal from "../../components/modal";
import { closeModal } from "../../store/actions/modal";
import { RepositoryType } from "../../models/repository";

export function Home() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { loading, success, data, open } = useSelector(
    (state: ReducersState) => {
      return {
        loading: state.Repository?.loading,
        success: state.Repository?.success,
        data: state.Repository?.data,
        error: state.Repository?.error,
        open: state.Modal.open,
      };
    }
  );

  const closeModalBox = () => {
    dispatch(closeModal());
  };

  function handleClick() {
    const value = inputRef.current?.value;
    if (!value) return;
    dispatch(getRepositories(value));
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleClick();
      }
    };

    inputRef.current?.addEventListener("keypress", handleKeyPress);

    return () => {
      inputRef.current?.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <GithubLogo size={40} className={classes.icon} />
        <h1 className={classes.title}>GitSearch</h1>
      </div>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Digite aqui..."
          className={classes.searchInput}
          ref={inputRef}
        />
        <button onClick={handleClick} className={classes.searchButton}>
          Ir
        </button>
      </div>
      {success && data.length === 0 && (
        <div className={classes.noRepositories}>
          <SmileySad size={18} />
          Nenhum repositório encontrado...
        </div>
      )}
      {success ? (
        <div className={classes.cardContainer}>
          {data.map((item: RepositoryType, index: number) => (
            <Card key={index} item={item} />
          ))}
        </div>
      ) : null}
      {loading ? <Loading /> : null}
      <Modal isOpen={open} onClose={closeModalBox}></Modal>
    </div>
  );
}
