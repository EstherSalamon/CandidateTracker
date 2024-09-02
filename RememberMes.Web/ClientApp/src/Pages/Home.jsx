import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        setCount(count + 1);
    }
    
    return (
        <div className="container" style={{marginTop: 80}}>
            <div className="justify-content-center align-items-center">
                <h1>Welcome! This is where we remember people. You may consider behaving.</h1>
                <hr />
                <br />
                <br/>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <a href='/addperson' className='btn btn-primary w-100'>Add Person</a>
                        </div>
                        <div className='col-md-3'>
                            <a href='/pending' className='btn btn-primary w-100'>View Pending</a>
                        </div>
                        <div className='col-md-3'>
                            <a href='/confirmed' className='btn btn-primary w-100'>View Confirmed</a>
                        </div>
                        <div className='col-md-3'>
                            <a href='/refused' className='btn btn-primary w-100'>View Refused</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;