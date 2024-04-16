import { EModalActionTypes } from "../../models/modal";

type TypeModalState = {
  open: boolean;
};

type TypeModalAction = {
  type: string;
};

const initialStateModal: TypeModalState = {
  open: false,
};

export const Modal = (state = initialStateModal, action: TypeModalAction) => {
  switch (action.type) {
    case EModalActionTypes.openModal:
      return {
        ...state,
        open: true,
      };
    case EModalActionTypes.closeModal:
      return {
        ...state,
        open: false,
      };
    default:
      return { ...state };
  }
};
