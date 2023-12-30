import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getData } from '../../store/api/api';
import { createData } from '../../store/api/api';
import { useDispatch } from 'react-redux';
import { createUserData,getUserData } from '../../store/slices/RegisterSlice';
import '../signin/Signin.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id:'',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        address: '',
        state: '',
        zipcode: '',
        city: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // console.log(formData);
    const handleSubmit = async (element) => {
        let isLogedin = false;
        element.preventDefault();
        try {
            const responseData = await createData(formData);
            console.log('API Response:', responseData);
            dispatch(getUserData(responseData));
            dispatch(createUserData(responseData));
            // isLogedin = true
            if(isLogedin === true) {
                navigate('/user');
            }else{
                navigate('/signin');
            }
           
            
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    


    

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <Form className="m-5" >

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="Enter Your Name" name='first_name' id='name' value={formData.name}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Control type="text" placeholder="Enter Last Name" name='last_name' id='lastname' value={formData.lastname}
                            onChange={handleInputChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control type="email" placeholder="Enter email" name='email' id='email' value={formData.email}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Control type="password" placeholder="Password" name='password' id='passwod' value={formData.password}
                            onChange={handleInputChange} />
                    </Form.Group>
                </Row>


                <Form.Group className="mb-3" controlId="formGridAddress1" >
                    <Form.Control placeholder="Address" name='address' value={formData.address}
                        onChange={handleInputChange} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Control placeholder='Enter Your City' name='city' value={formData.city}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Select name='state' value={formData.state}
                            onChange={handleInputChange}>
                            <option value="" >
                                Select State
                            </option>
                            <option value="chhattisgarh">Chhattisgarh</option>
                            <option value="odisha">Odisha</option>
                            <option value="punjab">Punjab</option>
                            <option value="maharashtra">Maharashtra</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Control placeholder='Enter Your Zip Code' name='zipcode' value={formData.zipcode}
                            onChange={handleInputChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Signup;