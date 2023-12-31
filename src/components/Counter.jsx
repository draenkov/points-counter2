import React, {useEffect, useState} from 'react';
import CounterItem from "./CounterItem";
import {getDatabase, onValue, ref} from "firebase/database";

const Counter = () => {
    const [playersData, setPlayersData] = useState(null);
    const db = getDatabase();

    useEffect(()=>{
        const dbRef = ref(db, 'players');

        return onValue(dbRef, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                setPlayersData(data);
            }
            console.log(data);
        });
    },[db])

    return (
        <div className='counter-wrap'>
            {playersData?.map(({id, name, points}) => <CounterItem key={id} name={name} points={points}  />)}
        </div>
    );
};

export default Counter;