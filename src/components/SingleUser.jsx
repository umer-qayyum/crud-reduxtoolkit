import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const yourUser = useSelector((state) => state.app.users);

  console.log(yourUser);
  const { id: ind } = useParams();
  // console.log(ind);
  const user = yourUser.filter((val) => {
    if (val.id === ind) {
      // console.log(val);
      return val;
    }
  });
  console.log(user);
  if (user == "") {
    return <h1 className="text-center">No User...</h1>;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2 className="text-center my-5">Single User Data</h2>
          <div className="d-flex justify-content-center">
            <div
              className="card text-start mt-3"
              style={{ padding: "5rem 10rem" }}
            >
              <div className="card-body">
                <h5 className="card-title ">
                  Name : <span className="ms-4">{user[0].name}</span>
                </h5>
                <h5 className="card-text">
                  Email : <span className="ms-4">{user[0].email}</span>
                </h5>
                <h5>
                  Age: <span className="ms-5">{user[0].age}</span>
                </h5>
                <h5>
                  Gender : <span className="ms-3">{user[0].gender}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
