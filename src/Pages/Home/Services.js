import React from 'react';
import interior from '../../assets/images/interior.png';
import cook from '../../assets/images/cook.png';
import homeClean from '../../assets/images/homeClean.png';
import bathroomClean from '../../assets/images/bathroomClean.png';
import carRepair from '../../assets/images/carRepair.png';
import electronicsRepair from '../../assets/images/electronicsRepair.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Home Interior Design',
            description: 'Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.',
            img: interior
        },
        {
            _id: 2,
            name: 'Personal Chef',
            description: 'A personal chef is a chef who is hired and prepares meals in the clients home kitchens, based on their needs and preferences.',
            img: cook
        },
        {
            _id: 3,
            name: 'Home Cleaning',
            description: 'A typical cleaning service can include dusting and vacuuming floors, wiping down surfaces in the bathroom and kitchen, emptying trash cans, scrubbing sinks and toilets, washing dishes and doing laundry.',
            img: homeClean
        },
        {
            _id: 4,
            name: 'Bathroom and Toilet Cleaning',
            description: 'Clear the floor of all items, such as baskets, towels, toilet plungers, etc. Second, sweep up any dust that collected on the floor, especially in the corners. Toilet cleaner is sprayed around the rim and into the bowl of the toilet prior to the use of the toilet brush.',
            img: bathroomClean
        },
        {
            _id: 5,
            name: 'Car Repair',
            description: 'An auto mechanic is a mechanic who services automobiles. Their main role is to diagnose the problem accurately and quickly. Their job may involve the repair of a specific part or the replacement of one or more parts as assemblies.',
            img: carRepair
        },
        {
            _id: 6,
            name: 'Electronics Repair',
            description: 'Electronics repair technicians can troubleshoot a piece of malfunctioning equipment and repair it. They can also test and maintain equipment to keep it from breaking down at all.',
            img: electronicsRepair
        },
    ];
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;