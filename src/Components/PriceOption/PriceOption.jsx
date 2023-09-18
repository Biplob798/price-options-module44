import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';



const PriceOption = ({option}) => {
    const  {name, price, features} = option;
    return (
        <div className='bg-blue-700 rounded-md p-4 text-white font-bold text-center'>
             <h2>
                <span className='text-2xl'>
                    {price}</span>
             </h2>
             <h4 className='text-lg text-center'>{name}</h4>
           <div>
           {
                features.map((feature, id) => <Feature key={id} feature={feature}></Feature>)
            }
           </div>
           <button className='p-2 mt-12 bg-lime-500 text-sm font-bold w-full hover:bg-green-900 rounded-lg'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
option: PropTypes.object
}
export default PriceOption;