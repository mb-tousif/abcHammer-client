import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../SharedPages/Loading/Loading';
import Review from './Review';

const ReviewSection = () => {
  const navigate = useNavigate();
  const url = "https://sheltered-headland-89528.herokuapp.com/reviews";
  const { isLoading, data: reviews } = useQuery('reviews', 
  ()=>fetch(url).then(res=>res.json()))
  
  if(isLoading){
    return <Loading/>
  }

    return (
      <section className="bg-base-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <p className="lg:w-1/2 w-full leading-relaxed text-xl text-primary font-medium">ABC Hammer Manufacturing Ltd is the World Best Hammer manufacturer. Here is our Valued Clients Reviews. Please explore, then PURCHASE!</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto my-auto">
            {
              reviews?.map(review=><Review review={review} key={review._id}/>)
            }
          </div>
          <button onClick={()=> navigate("/dashboard/addReview")} className="btn btn-wide btn-primary mt-10">Add your Experience</button>
        </div>
      </section>
    );
}; 

export default ReviewSection;