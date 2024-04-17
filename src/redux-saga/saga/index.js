import { all } from "redux-saga/effects";
import {
  handle_delete_user_saga,
  handle_get_user_saga,
  handle_post_user_saga,
  handle_update_user_saga,
} from "./rootSaga/userSaga";

function* rootSaga() {
  yield all([
    handle_get_user_saga(),
    handle_post_user_saga(),
    handle_delete_user_saga(),
    handle_update_user_saga(),
  ]);
}

export default rootSaga;