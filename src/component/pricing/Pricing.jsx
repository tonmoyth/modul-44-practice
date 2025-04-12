import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const Pricing = ({pricingData}) => {
    const pricingRealData = use(pricingData);
    
    return (
        <div className='w-11/12 mx-auto mt-8'>
            <h1 className='text-5xl font-bold mb-4'>All Pricing list</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                pricingRealData.map(pricing => <PricingCard key={pricing.id}
                pricing={pricing}
                ></PricingCard>)
            }
            </div>
        </div>
    );
};

export default Pricing;