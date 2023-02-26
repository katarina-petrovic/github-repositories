import './copyRepUrl.scss';

const CopyRepUrls = ({ textUrl }) => {
    const displaySuccess = () => {
        const tempNotice = document.createElement('div');
        tempNotice.className = 'notice';
        tempNotice.innerText = 'text copied!';
        const parentDiv = document.querySelector('.container-copy-text');
        parentDiv.appendChild(tempNotice);
        const copyText = document.querySelector('.copy-text');
        copyText.classList.add('disable-click');
        setTimeout(() => {
            parentDiv.removeChild(tempNotice);
            copyText.classList.remove('disable-click');
        }, 2000)
    }

    const copy = async () => {
        await navigator.clipboard.writeText(textUrl);
        displaySuccess();
    }

    return (
        <div className="container-copy-text">
            <div className="copy-text" onClick={copy}>{textUrl}</div>
        </div>
    )
};

export default CopyRepUrls;
