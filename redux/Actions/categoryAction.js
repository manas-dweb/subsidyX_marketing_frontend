import { categoryService } from "redux/Services/categoryService";
import { alertActions } from "./alertAction";
import { categoryConstant } from "redux/Constants/categoryConstant";

export const categoryAction = {
  getCategoryList,
};

function getCategoryList() {
  return (dispatch) => {
    dispatch(request());
    categoryService.getCategoryList().then(
      (res) => {
        dispatch(success(res));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request(data) {
    return { type: categoryConstant.GET_CATEGORY_REQUEST, data };
  }
  function success(data) {
    return { type: categoryConstant.GET_CATEGORY_SUCCESS, data };
  }
  function failure(error) {
    return { type: categoryConstant.GET_CATEGORY_FAILURE, error };
  }
}
