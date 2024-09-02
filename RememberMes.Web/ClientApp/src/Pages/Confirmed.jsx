import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Confirmed = () => {

    const [candidates, setCandidates] = useState([]);
    const [showNotes, setShowNotes] = useState(true);

    useEffect(() => {

        const loadData = async () => {
            const { data } = await axios.get('/api/candidate/getby?status=confirmed');
            setCandidates(data);
        };

        loadData();

    }, []);

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='justify-content-center align-items-center'>
                <h2>These are all those who made the right decision! Go people!</h2>
                <hr />
                <button className='btn btn-success' onClick={() => { setShowNotes(!showNotes) }}>Toggle Notes</button>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            {showNotes && <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {candidates && candidates.map(o =>
                            <tr key={o.id}>
                                <td>{o.firstName}</td>
                                <td>{o.lastName}</td>
                                <td>{o.phoneNumber}</td>
                                <td>{o.email}</td>
                                {showNotes && <td>{o.notes ? o.notes : 'N/A'}</td>}
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )

};

export default Confirmed;