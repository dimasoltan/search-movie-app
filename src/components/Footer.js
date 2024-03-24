import {Fragment, useEffect, useState} from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <Fragment>
            <div className="text-light bg-primary pt-4 pb-1 footer">
                <p>{`${year} © Dumitru Soltan. All Rights Reserved.`}</p>
            </div>
        </Fragment>
    );
};

export default Footer;