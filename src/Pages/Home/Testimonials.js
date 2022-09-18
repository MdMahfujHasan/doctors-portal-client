import React from 'react';
import quote from '../../assets/icons/quote.svg';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Md. Mahfuj Hasan',
            review: `This website provides an excellent service. I've tried the home cleaning service and i've got to say, the service provider was very good at his work.`,
            location: 'Dhaka',
            img: user1
        },
        {
            _id: 2,
            name: 'Reyadul Islam',
            review: `I've tried the personal chef service while i was outside home for a couple of days. The quality of the food was very good. Excellent chef i must say!`,
            location: 'Chandpur',
            img: user2
        },
        {
            _id: 3,
            name: 'Md. Imran Hossain',
            review: `My car had some internal problems that i couldn't figure out. Then i tried this website's car repair service. Now my car works just about fine. The service was quite good.`,
            location: 'Barishal',
            img: user3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Consumers Say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;