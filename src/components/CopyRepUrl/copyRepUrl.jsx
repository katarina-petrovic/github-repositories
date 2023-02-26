import './copyRepUrl.scss';

const CopyRepUrls = ({ textUrl }) => {

    const displaySuccess = () => {
        const tempNotice = document.createElement('span');
        tempNotice.style.textAlign = "center";
        tempNotice.innerText = 'text copied!';

        const parent = document.querySelector(".container-copy-text");
        parent.appendChild(tempNotice);

        setTimeout(() => parent.removeChild(tempNotice), 2000)
        
    }

    const copy = async () => {
        await navigator.clipboard.writeText(textUrl);
        displaySuccess();
    }

    return (
        <div className='container-copy-text'>
            <div className='copy-text' onClick={copy}>{textUrl}</div>
        </div>)
};

export default CopyRepUrls;
