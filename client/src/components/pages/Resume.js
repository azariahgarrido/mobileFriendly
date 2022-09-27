import resume from './assets/Resume2022.pdf';
import download from './assets/download.png';

export default function Resume() {
    return(
        <div className='resume'>
            <div className='download'>DOWNLOAD</div>
            <a href={resume} target="_blank" rel="noreferrer">
                <img className='downloadI' src={download} alt='Download'></img>
            </a>
        </div>
    )
}