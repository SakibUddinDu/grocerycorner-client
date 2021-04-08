import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FakeData from "../../resources/FakeData/FakeData";
import logo from "../../resources/icons/Group 33072.png";
import "./AddProduct.css";

const AddProduct = () => {
  // console.log(FakeData);
  const { register, handleSubmit, watch, errors } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    const productData = {
      name: data.name,
      pic : imgURL,
      price: data.price
    };
    const url = `http://localhost:5000/addProduct`;
    console.log(productData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImgUpload = (event) => {
    //   console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "9509439a500d1f702558a44224fca7c5");
    imgData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
        // console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddProduct = () => {
    console.log("product added");
    fetch("http://localhost:5000/addItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FakeData),
    });
    // FakeData
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-3 text-white bg-secondary height">
          <figure className="mt-5 pl-5">
            <img style={{ width: "250px" }} src={logo} alt="" />
          </figure>
          <nav className="pl-5 mt-5 listStyle">
            <li>Mange Product</li>
            <li>&#43; Add Product</li>
            <li>Edit Product</li>
          </nav>
        </div>
        <div className="col-md-9">
          <button onClick={handleAddProduct}>add Product</button>
          <div className="from_area">

            <form className="pt-5 pl-5" onSubmit={handleSubmit(onSubmit)}>
              <h3>Product Title</h3>
              <input
                className="form-control"
                name="name"
                defaultValue="New exciting Product"
                ref={register}
                required
              />
              <br />
              <br />
              <input
                className="form-control"
                name="price"
               placeholder="price"
                ref={register}
                required
              />
              <br />
              <br />
              <h3>Upload Image</h3>
              <input type="file" onChange={handleImgUpload} />
              <br />
              <br />
              <input
                className="btn btn-dark px-5"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import logo from '../../logos/Group 1329.png';

// const AddService = () => {
//      // service insert
//     const history = useHistory();

//     const [serviceinfo, setServiceInfo] = useState({});
//     const handleBlur = e => {
//         const newInfo = { ...serviceinfo };
//         newInfo[e.target.name] = e.target.value;
//         setServiceInfo(newInfo);
//     };

//     const [fileStorage, setFileStorage] = useState(null);
//     const handleFileChange = (e) => {
//         const newFile = e.target.files[0];
//         setFileStorage(newFile)
//     }

//     const handleSubmit = (e) => {
//         const formData = new FormData()
//         formData.append('file', fileStorage);
//         formData.append('name', serviceinfo.name);

//         fetch('https://peaceful-reaches-79554.herokuapp.com/addService', {
//             method: 'POST',
//             body: formData
//         })
//             .then(res => res.json())
//             .then(result => {
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//             alert('Your service has been added successfully');
//             history.push('/')
//     }
//     return (
// <div>
//     <div className="row">
//         <div className="col-md-3">
//             <figure className="mt-5 pl-5">
//                 <img style={{ height: '50px' }} src={logo} alt="" />
//             </figure>
//             <nav className="pl-5 mt-5">
//                 <li>Make Service</li>
//             </nav>
//         </div>
//         <div className="col-md-9">

//             <div className="from_area">
//             <form className="pt-5 pl-5" onSubmit={handleSubmit}>
//                     <h3>Service Title</h3>
//                     <input onBlur={handleBlur} className="form-control" name="name" placeholder="services name" required />
//                     <br />
//                     <br />
//                     <h3>Upload Icon</h3>
//                     <input onChange={handleFileChange} type="file" />
//                     <br />
//                     <br />
//                     <input className="btn btn-dark px-5" type="submit" value="Submit" />
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>
//     );
// };

// export default AddService;
