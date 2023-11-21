import {Link} from "react-router-dom";

function body() {

    return (
        <div id="main" className="flex-container">
            <div className="overlay-content">
                <h1 className="fat_text text_style">
                    TIKETTO
                </h1>
                <h4 className="text_style--less">
                    Connecting Events, People, and Places
                </h4>
                <button className="learn_more">
                    <Link to="#" className={"text_decor"}>Learn more</Link>
                </button>
                <button className="for_private--persons">
                    <Link to="#" className={"text_decor"}>Private events</Link>
                </button>
            </div>
        </div>
    );
}

export default body;