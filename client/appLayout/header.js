import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className={'logo__holder'}>
                <p>placeholder</p>
            </div>
            <li className={'member_name--link'}>
                <Link to="#">View events</Link>
            </li>
            <li className={'member_name--link'}>
                <Link to="#">About us</Link>
            </li>
            <li className={'member_name--link'}>
                <Link to="/data">test</Link>
            </li>
            <div className={'buttons'}>
                <button className={'try_button'}>
                    <Link to="#">Try services</Link>
                </button>
                <button className={'sign_button'}>
                    <Link to="#">Sign in</Link>
                </button>
            </div>
        </nav>
    );
}
export default Navbar;