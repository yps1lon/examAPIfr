import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FooterFinal() {
    const [animateFooter, setAnimateFooter] = useState(false);

    const isElementInViewport = (e) => {
        const rect = e.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const handleScroll = () => {
        console.log("Scrolling!")
        const finalFooter = document.querySelector(".footer_final");
        if (isElementInViewport(finalFooter)) {
            setAnimateFooter(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`footer_final ${animateFooter ? "footer-final-visible" : ""}`}>
            <p className={"copyright"}>Copyright &copy; Tiketto 2023</p>
            <div className={"link_holder--terms"}>
                <li className={"links_terms"}>
                    <Link to={"#"}>Terms of Use</Link>
                </li>
                <li className={"links_terms"}>
                    <Link to={"#"}>Privacy Policy</Link>
                </li>
                <li className={"links_terms"}>
                    <Link to={"#"}>Copyright and Intellectual Property Policy</Link>
                </li>
            </div>
        </div>
    );
}

export default FooterFinal;