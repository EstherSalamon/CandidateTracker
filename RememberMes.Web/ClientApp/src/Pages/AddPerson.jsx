import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTotals } from '../GetTotalContext';

const AddPerson = () => {
    const [person, setPerson] = useState(
        {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            notes: ''
        }
    );
    const navigate = useNavigate();
    const { refreshTotals } = useTotals();

    const onTextChange = e => {
        const copy = { ...person };
        copy[e.target.name] = e.target.value;
        setPerson(copy);
    };

    const onAddClick = async () => {
        await axios.post('/api/candidate/add', { person });
        refreshTotals();
        navigate('/');
    };

    return (
        <div className='container' style={{marginTop: 80} }>
            <h1 style={{color: 'pink'} }>Oh, so you want to add someone? Fine...</h1>
            <hr />
            <input type='text' name='firstName' value={person.firstName} className='form-control' placeholder='First Name' onChange={onTextChange}></input>
            <br />
            <input type='text' name='lastName' value={person.lastName} className='form-control' placeholder='Last Name' onChange={onTextChange}></input>
            <br />
            <input type='text' name='phoneNumber' value={person.phoneNumber} className='form-control' placeholder='Phone Number' onChange={onTextChange}></input>
            <br />
            <input type='email' name='email' value={person.email} className='form-control' placeholder='Email' onChange={onTextChange}></input>
            <br />
            <textarea name='notes' value={person.notes} className='form-control' placeholder='Additional details' onChange={onTextChange } rows='5'></textarea>
            <button className='btn btn-dark mt-2 w-100' style={{ color: 'pink' }} onClick={onAddClick }>Add</button>
        </div>
    )
}

export default AddPerson;