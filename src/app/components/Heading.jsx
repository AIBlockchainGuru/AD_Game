import React from 'react';


const Heading = ({ title = 'AD Gaming', description = '', keywords = '' }) => {
    return(
        <>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </>
    );
};

export default Heading;