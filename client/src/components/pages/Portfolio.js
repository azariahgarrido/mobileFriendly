import textEdit from './assets/textEditor.jpg';
import charger from './assets/ammino.jpg';
import shoot from './assets/shoot.jpg';

export default function Portfolio() {
    return(
        <div className="projectContainer">

            <a href="https://nameless-reef-69253.herokuapp.com/" target="_blank" rel="noreferrer"><img className='textEdit' src={textEdit} alt="textEdit"></img></a>
            <div className='githubLinks'><a href='https://github.com/azariahgarrido/textEditor.git' target="_blank" rel="noreferrer">textEditor</a></div>
            <a href="https://sonnyaddison.github.io/amminoDisrespect/" target="_blank" rel="noreferrer"><img className='textEdit' src={charger} alt="textEdit"></img></a>
            <div className='githubLinks'><a href='https://github.com/SonnyAddison/amminoDisrespect.git' target="_blank" rel="noreferrer">amminoDisrespect</a></div>
            <a href="https://pacific-river-09872.herokuapp.com/" target="_blank" rel="noreferrer"><img className='textEdit' src={shoot} alt="textEdit"></img></a>
            <div className='githubLinks'><a href='https://github.com/azariahgarrido/techBlog.git' target="_blank" rel="noreferrer">techBlog</a></div>
            
        </div>
    )
}