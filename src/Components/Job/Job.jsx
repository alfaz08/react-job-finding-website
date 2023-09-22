import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({job}) => {
  const {id,logo,job_title,company_name,remote_or_onsite,
  location,job_type,salary} =job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="mt-4">
      <button className="btn btn-accent px-4 font-extrabold border rounded mr-4">{remote_or_onsite}</button>
      <button className="btn btn-accent px-4 font-extrabold border rounded">{job_type}</button>
    </div>

    <div className="flex mt-4">
      <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
      <h2 className="flex ml-4"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
      
    </div>

    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn btn-accent">View Details</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default Job;