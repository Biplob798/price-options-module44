import PropTypes from 'prop-types';
import {BsFileEarmarkCheckFill} from 'react-icons/Bs'
const Feature = ({feature}) => {
    return (
        <div>
              
                <p className='text-sm flex items-center gap-3'>   <BsFileEarmarkCheckFill  className='text-green-700'></BsFileEarmarkCheckFill> {feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
    }

export default Feature;