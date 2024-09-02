import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Pending = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {

        const loadData = async () => {
            const { data } = await axios.get('/api/candidate/getby?status=pending');
            setCandidates(data);
        };

        loadData();

    }, []);

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='justify-content-center align-items-center'>
                <h2>These are all those still unsured ones.</h2>
                <hr />
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates && candidates.map(o =>
                            <tr key={o.id}>
                                <td>
                                    <a href={`/view/${o.id}` }>View Details</a>
                                </td>
                                <td>{o.firstName}</td>
                                <td>{o.lastName}</td>
                                <td>{o.phoneNumber}</td>
                                <td>{o.email}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )

};

export default Pending;