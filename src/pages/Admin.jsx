import React, {useEffect, useState} from 'react';
import AdminItem from "../components/AdminItem";
import {getDatabase, ref, set, onValue} from "firebase/database";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const [isNewGameOpen, setIsNewGameOpen] = useState(false);
    const [names, setNames] = useState('');
    const [playersData, setPlayersData] = useState(null);
    const db = getDatabase();
    const navigate = useNavigate()

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

    const handleStart = async () => {
        if (names) {
            const data = names.split(',').reduce((acc, name, index) => {
                acc[index] = {
                    id: String(index),
                    name: name.trim(),
                    points: 0,
                }
                return acc;
            }, {});

            try {
                await set(ref(db, 'players'), data)
            } catch (error) {
                console.log(error);
            } finally {
                setIsNewGameOpen(false);
            }
        }
    }

    return (
        <div className='admin'>
            <div className='admin-wrap'>
                {playersData?.map(({id, name, points}) => <AdminItem key={id} id={id} name={name} points={points}/>)}
                <div className='new-game'>
                    {isNewGameOpen ?
                        <>
                            <input className='input' onChange={event => setNames(event.target.value)}
                                   placeholder={'Type names'}/>
                            <button className='button' onClick={handleStart}>Start</button>
                        </>
                        : <button className='button' onClick={() => setIsNewGameOpen(true)}>New game</button>}
                </div>
            </div>
            <button onClick={() => navigate('/points-counter2')} className='admin-btn'>Back</button>
        </div>
    );
};

export default Admin;