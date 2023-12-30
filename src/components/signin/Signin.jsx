import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../signin/Signin.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();
    const { createDataAll, AllData } = useSelector((state) => state.Users);
    console.log('alldata',AllData);
    console.log("createDataAll",createDataAll)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('logindata', formData);
        if (formData.email === AllData[0].email && formData.password === AllData[0].password) {
            console.log('email matched');
            navigate('/user');
        }else{
            console.log('email not matched');
            navigate('/');
        }
    }

    return (
        <div className='container'>
            <h1>Sign In</h1>
            <Form className="p-5">

                <Form.Group controlId="formGridEmail" className='mb-4'>
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formGridPassword" className='mb-4'>
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handleInputChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit} >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Signin;