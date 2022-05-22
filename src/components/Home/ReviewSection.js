import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading/Loading';
import Review from './Review';
import { RiUserVoiceFill } from "react-icons/ri";

const ReviewSection = () => {
  const url = "http://localhost:4000/reviews";
  const { isLoading, data: reviews, error } = useQuery('reviews', 
  ()=>fetch(url).then(res=>res.json()))
  
  if(isLoading){
    return <Loading/>
  }
    return (
      <section className="bg-base-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl indicator text-3xl font-bold title-font mb-2 text-primary">Hello Guest<span className="indicator-start badge badge-primary"><RiUserVoiceFill/></span></h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-primary font-medium">ABC Hammer Manufacturing Ltd. is the World Best Hammer manufacturer. Here is our Valued Clients Reviews. Please Explore then PURCHASE</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto my-auto">
            {
              reviews.map(review=><Review review={review} key={review._id}/>)
            }
          </div>
          <button className="btn btn-wide btn-primary mt-10">Add your Experience</button>
        </div>
      </section>
    );
}; 

export default ReviewSection;