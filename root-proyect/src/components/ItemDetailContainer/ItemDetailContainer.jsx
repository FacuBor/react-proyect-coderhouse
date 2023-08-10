import './ItemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    const [loading, setLoading] =useState (true);
    const { itemId } = useParams();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    useEffect(()=>{
        setLoading(true)
         //referencia
        const itemRef = doc(dataBase, "productos", itemId)
        //llamado referencina
        getDoc(itemRef)
        .then((doc)=>{
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .catch(e=> console.log(e))
        .finally(()=> setLoading(false))
    },[]);

    return(
        <div className='itemDetailContainer'>
            {loading
                ?  <div className='divLoader'><Loader/></div>
                : <ItemDetail item={item}/>
            }
        </div>
    )
};