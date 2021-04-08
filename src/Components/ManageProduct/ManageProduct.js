import {
  faPencilAlt,
  faPlusSquare,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import logo from "../../resources/icons/Group 33072.png";

const ManageProduct = () => {
  // const [adminPanel, setAdminPanel] = useContext(AdminPanelContext)
  const [adminPanelData, setAdminPanelData] = useState([]);
  // console.log(adminPanel);

  useEffect(() => {
    fetch("https://shielded-retreat-60482.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAdminPanelData(data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-3 text-white bg-secondary height">
          <figure className="mt-5 pl-5">
            <img style={{ width: "250px" }} src={logo} alt="" />
          </figure>
          <nav className="pl-5 mt-5 listStyle">
            <li>
              {" "}
              <FontAwesomeIcon icon={faTasks} />
              Mange Product
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faPlusSquare} /> Add Product
            </li>
            <br />
            <li>
              {" "}
              <FontAwesomeIcon icon={faPencilAlt} /> Edit Product
            </li>
          </nav>
        </div>
        <div className="col-md-9 mt-5">
          <div className="from_area">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-secondary text-left" scope="col">
                    Product Name
                  </th>
                  <th className="text-secondary" scope="col">
                    Picture
                  </th>
                  <th className="text-secondary" scope="col">
                    Price
                  </th>
                  <th className="text-secondary" scope="col">
                    Action
                  </th>
                </tr>
              </thead>

              {/* <tbody>
                {setAdminPanelData.map((adminData) => (
                  <tr>
                    <td>{adminData.name}</td>
                    <td>
                      <img src={adminData.pic} alt="" />
                    </td>
                    <td>{adminData.price}</td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
