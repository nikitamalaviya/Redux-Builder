import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_USER_PENDING,
  POST_USER_PENDING,
  UPDATE_USER_PENDING,
} from "../redux-saga/user/action/action";
import { useState } from "react";

const Data = () => {
  let email = useRef();
  let password = useRef();

  //view
  let [view, setView] = useState();

  //selector
  let user = useSelector((state) => state.userReducer);

  let dispatch = useDispatch();

  //add user
  let addUser = () => {
    let data = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(data);

    dispatch({ type: POST_USER_PENDING, payload: data });
  };

  //delete user
  let handleDelete = (id) => {
    console.log(id);

    dispatch({ type: DELETE_USER_PENDING, payload: id });
  };

  //update

  let handleView = (id, index) => {
    let data = user.user[index];

    // console.log(data);
    setView(data);
  };

  let handle = (e) => {
    setView({ ...view, [e.target.name]: e.target.value });
  };

  let update = () => {
    console.log(view);
    dispatch({ type: UPDATE_USER_PENDING, payload: view });
  };

  return (
    <>
      <label style={{ marginBottom: "5px" }}> ENTER YOUR DATA:-</label>
      <br />
      <input
        type="text"
        style={{ marginRight: "10px" }}
        ref={email}
        placeholder="enter your email"
      />
      <input type="text" ref={password} placeholder="enter your password" />
      <button style={{ marginLeft: "15px" }} onClick={addUser}>
        Save
      </button>
      <br />
      <br />
      <label style={{ marginBottom: "5px" }}>UPDATE DATA:-</label>
      <br />
      <input
        type="text"
        style={{ marginRight: "10px" }}
        placeholder="enter your upadated email"
        name="email"
        value={view?.email}
        onChange={handle}
      />
      <input
        placeholder="enter your updated password"
        type="text"
        name="password"
        value={view?.password}
        onChange={handle}
      />
      <button style={{ marginLeft: "15px" }} onClick={update}>
        Update
      </button>

      <div className="row">
        {user.user?.map((val, index) => (
          <div class="card" style={{ width: "18rem", margin: "10px 5px" }}>
            <div class="card-body">
              <h5 class="card-title">{val.email}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{val.password}</h6>
              <button onClick={() => handleDelete(val.id)} class="card-link">
                Delete
              </button>
              <button
              style={{marginLeft:'10px'}}
                class="card-link"
                onClick={() => handleView(val.id, index)}
              >
                update
              </button>
            </div>
          </div>

          // <>
          //   <p>{val.id}</p>
          //   <h1>{val.email}</h1>
          //   <h2>{val.password}</h2>
          //   <button onClick={() => handleDelete(val.id)}>delete</button>
          //   <button onClick={() => handleView(val.id, index)}>View</button>
          // </>
        ))}
      </div>
    </>
  );
};

export default Data;
