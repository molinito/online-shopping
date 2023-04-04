import React, {useState} from "react";

function Register() {
    const[formData, setFormaData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

const handleChange = (event) => {
    setFormaData({
        ...formData,
        [event.target.name]: event.target.value,
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
};

const showMessage = () => {
    alert('Here goes the server connection');
  };

return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"    
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary"  onClick={showMessage}>
                Register
            </button>
            </div>
        </form>
    </div>
);
}

export default Register;