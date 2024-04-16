import { EModalActionTypes } from "../../models/modal";

export const openModal = () => {
  return {
    type: EModalActionTypes.openModal,
  };
};

export const closeModal = () => {
  return {
    type: EModalActionTypes.closeModal,
  };
};
