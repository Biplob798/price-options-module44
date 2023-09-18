import PropTypes from 'prop-types'


const PriceOption = ({option}) => {

    return (
        <div>
              <li className='mr-10 hover:bg-yellow-200 hover:text-blue-400'>
            {option.id}{option.name}
        </li>
        </div>
    );
};

PriceOption.propTypes = {
option: PropTypes.object
}
export default PriceOption;