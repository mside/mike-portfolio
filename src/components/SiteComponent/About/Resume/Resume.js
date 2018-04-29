import React from 'react';
import mikeCV from '../../../../assets/img/michaelSideResume.pdf';

//Props have to be passed into function for props to work
const resume = () => (
    <div>
        <object className="pdf" data={ mikeCV } type="application/pdf" >
            Michael Side Web Dev Resume
        </object>
    </div>
);

export default resume;