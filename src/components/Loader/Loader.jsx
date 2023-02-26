import loaderGif from '../../assets/loader.gif';
import './loader.scss';

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loaderGif} alt='loader' />
            <div className='loader-text'>Loading...</div>
        </div>
    )

}

export default Loader;