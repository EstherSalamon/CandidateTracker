import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTotals } from '../GetTotalContext';

const View = () => {

    const { id } = useParams();
    const [candidate, setCandidate] = useState({});
    const [loading, setLoading] = useState(true);
    const { refreshTotals } = useTotals();

    const loadData = async () => {
        setLoading(true);
        const { data } = await axios.get(`/api/candidate/byid?id=${id}`);
        setCandidate(data);
        setLoading(false);
    };

    useEffect(() => {

        loadData();

    }, []);

    const onConfirmClick = async () => {
        const copy = { ...candidate };
        copy.status = 'Confirmed';
        await axios.post('/api/candidate/update', copy);
        loadData();
        await refreshTotals();
    };

    const onRefuseClick = async () => {
        const copy = { ...candidate };
        copy.status = 'Refused';
        await axios.post('/api/candidate/update', copy);
        loadData();
        await refreshTotals();
    };

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='col-md-6 offset-3 '>
                {loading ? <h1>Loading...</h1> :
                    <div className='card bg-light'>
                        <div className='card-header'>
                            <h2>{candidate.firstName} {candidate.lastName}</h2>
                        </div>
                        <div className='card-body'>
                            <h4>Email: {candidate.email}</h4>
                            <br />
                            <h4>Phone Number: {candidate.phoneNumber}</h4>
                            <br />
                            <h4>Status: {candidate.status}</h4>
                            <br />
                            <h4>Notes: {candidate.notes ? candidate.notes : 'N/A'}</h4>
                        </div>
                        <div className='card-footer'>
                            {candidate.status === 'Pending' && <>
                            <button className='btn btn-primary w-50' onClick={onConfirmClick}>Confirm</button>
                                <button className='btn btn-danger w-50' onClick={onRefuseClick}>Refuse</button>
                            </>}
                        </div>
                    </div>}
            </div>
        </div>
    )
};

export default View;