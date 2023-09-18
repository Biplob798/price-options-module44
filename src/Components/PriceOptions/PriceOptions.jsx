import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: "$30/month",
          features: [
            "Access to cardio and weightlifting area",
            "Unlimited use of locker room",
            "24/7 gym access",
            "No long-term contract"
          ]
        },
        {
          id: 2,
          name: "Premium Membership",
          price: "$50/month",
          features: [
            "All Basic Membership features included",
            "Access to group fitness classes",
            "Free towel service",
            "Discounts on personal training sessions"
          ]
        },
        {
          id: 3,
          name: "Family Membership",
          price: "$80/month",
          features: [
            "All Premium Membership features included",
            "Access for up to 2 adults and 2 children",
            "Family locker room",
            "Childcare services available"
          ]
        }
      ];
      
     
    return (
        <div>
            <h2 className="text-5xl">Best Price
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </h2>
        </div>
    );
};

export default PriceOptions;