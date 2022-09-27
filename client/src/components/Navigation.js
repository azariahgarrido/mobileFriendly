export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className="nav">

            <button className="navButton">
                <a
                    href="#AboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'navTrue' : 'navFalse'}
                    >About Me
                </a>
            </button>

            <button className="navButton">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'navTrue' : 'navFalse'}
                    >Portfolio
                </a>
            </button>

            <button className="navButton">
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'navTrue' : 'navFalse'}
                    >Contact
                </a>
            </button>

            <button className="navButton">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'navTrue' : 'navFalse'}
                    >Resume
                </a>
            </button>

        </div>
    )
}