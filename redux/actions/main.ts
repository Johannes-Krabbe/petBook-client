import * as t from "../types";
import axios from "axios";

export const setInfo = (name: any) => (dispatch: any) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};
