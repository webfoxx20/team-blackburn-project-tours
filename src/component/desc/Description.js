import React, {useState} from 'react';
import './Description.css';

const Description = ({ description, maxLength }) => {
    const [showLess, setShowLess] = useState(true);
    if (description.length <= maxLength ) {
    return <div><p>{ description }</p></div>
    }

    return (
        <div>
            
                {showLess ? `${description.substr(0, maxLength).trim()} ...` : description}
                    {showLess ? 
                    ( <a  className="show" onClick={() => setShowLess(false)}> Show More</a> ) 
                    : 
                    ( <a  className="show" onClick={() => setShowLess(true)}> Show Less</a> )
                    }
        </div>
    )
}

export default Description;
