import { useState } from 'react';
import Axios from 'axios';

const Form = () => {

    const [userObj, setUserObj] = useState({ Name: '', Color: '', Age: 0 });

    const handleChange = (event) => {
        setUserObj({...userObj, [event.target.id]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userObj);
        await Axios.post('/.netlify/functions/addData', {
            name: userObj.Name,
            color: userObj.Color,
            age: userObj.Age,
        });
    }
    
    return (
        <div className='form-container'>
            <form >
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <label style={{ marginRight: '5px' }}>Name</label>
                        <input type='text' id='Name' value={userObj.Name} onChange={handleChange} />
                    </li>
                    <li>
                        <label style={{ marginRight: '5px' }}>Favorite Color</label>
                        <input type='text' id='Color' value={userObj.Color} onChange={handleChange}/>
                    </li>
                    <li>
                        <label style={{ marginRight: '5px' }}>Age</label>
                        <input type='number' id='Age' value={userObj.Age}  onChange={handleChange}/>
                    </li>
                </ul>
                <button className='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );

}

export default Form;