import './Loader.scss'
import Spinner from 'react-bootstrap/Spinner';

export const Loader = () =>{

    return(
        <div className='spinnerContainer'>
            <Spinner animation="border" variant="warning" />
        </div>
    )
}