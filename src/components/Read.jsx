import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const [radioData, setRadioData] = useState("");
  useEffect(() => {
    dispatch(showUser());
  }, []);
  const { users, loading ,searchData } = useSelector((state) => state.app);
  if (loading == true) {
    return <h1 className="text-center">Loading...</h1>;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h3 className="my-3">All Users</h3>
          
      <input
        class="form-check-input mx-1"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label">All</label>
      <input
        class="form-check-input mx-1"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Male</label>
      <input
        class="form-check-input mx-1"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Female</label>
          <div className="row">


          {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((ele) => {

            
                const { name, email, age, gender, id } = ele;
                return (
                    <>
                      <div className="col-lg-4 my-2">
                        <div className="card" key={id} style={{ width: "20rem" }}>
                          <div className="card-body">
                            <h5 className="card-title">Name : {name}</h5>
    
                            <h5 className="card-title mb-3">Age: {age}</h5>
    
                            <span className="mx-2 btn btn-outline-success">
                              <Link
                                to={`/read/${id}`}
                                style={{ textDecoration: "none", color: "black" }}
                              >
                                View
                              </Link>
                            </span>
                            <span className="mx-2 btn btn-outline-success">
                              <Link
                                to={`/edit/${id}`}
                                style={{ textDecoration: "none", color: "black" }}
                              >
                                edit
                              </Link>
                            </span>
                            <span className="mx-2 btn btn-outline-success">
                              <Link
                                onClick={()=>dispatch(deleteUser(id))}
                                style={{ textDecoration: "none", color: "black" }}
                              >
                                remove
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  );

                })}
            {/* {users.map((val) => {
              const { name, email, age, gender, id } = val;
              return (
                <>
                  <div className="col-lg-4 my-2">
                    <div className="card" key={id} style={{ width: "20rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">Name : {name}</h5>

                        <h5 className="card-title mb-3">Age: {age}</h5>

                        <span className="mx-2 btn btn-outline-success">
                          <Link
                            to={`/read/${id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            View
                          </Link>
                        </span>
                        <span className="mx-2 btn btn-outline-success">
                          <Link
                            to={`/edit/${id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            edit
                          </Link>
                        </span>
                        <span className="mx-2 btn btn-outline-success">
                          <Link
                            onClick={()=>dispatch(deleteUser(id))}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            remove
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
