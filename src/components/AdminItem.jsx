import React from 'react';
import { getDatabase, ref, update } from "firebase/database";


const AdminItem = ({id, name, points}) => {
    const db = getDatabase();

    const changeAmount = async (operation) => {
        try {
            await update(ref(db, 'players/' + id), {
                points: operation === 'plus' ? points + 1 : points - 1
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='admin-item-wrap'>
            <div className='admin-item'>
                <p className='name'>{name}</p>
                <p className='value'>{points}</p>
            </div>
            <div className='counter-btns'>
                <button onClick={()=> changeAmount('minus')}>
                    <svg fill="#43B38E" width="20px" height="20px" viewBox="0 -12 32 32" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                            <g id="Icon-Set-Filled" transform="translate(-414.000000, -1049.000000)">
                                <path
                                    d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049"
                                    id="minus">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
                <button onClick={()=> changeAmount('plus')}>
                    <svg fill="#43B38E" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         width="20px" height="20px" viewBox="0 0 45.402 45.402"
                         xmlSpace="preserve">
                        <g>
                            <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                        </g>
                    </svg>
                </button>
            </div>
        </div>

    );
};

export default AdminItem;