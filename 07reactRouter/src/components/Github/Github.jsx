import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState({}); // Initialize as an object

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary') // Correct URL
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error)); // Add error handling
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img className='text-center' src={data.avatar_url} alt="Git picture" width={300} />
        </div>


    );
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}