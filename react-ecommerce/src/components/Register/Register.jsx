import { useNavigate } from "react-router-dom";
import { useState } from "react";
let dataArray = [];

const Register = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");

  // const handleInputChange = (event) => {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   console.log(data.title.length);
  //   if (data.title.length + 1 < 3) {
  //     setMessage("Name must be at least 3 characters");
  //     setBtnDisabled(true);
  //   } else {
  //     setMessage(null);
  //     setBtnDisabled(false);
  //   }

  //   setData({
  //     ...data,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      navigate("/");
    }, 300);
  };
  return (
    <div>
      <div>
        <h1>Register</h1>
      </div>
    </div>
  );
};

export default Register;
