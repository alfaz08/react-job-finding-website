import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs,setJobs] =useState([])


  //Load show all data
  const [dataLength,setDataLength] =useState(4)



  useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJobs(data));
  },[])

  return (
    <div>
      <div className="center">
        <h2 className="text-4xl text-center">Featured Jobs: {jobs.length}</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit vel magnam iusto eaque! Nihil tempora sequi id aliquam similique.</p>

      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {
          jobs.slice(0,dataLength).map(job=> <Job key={job.id} job={job}></Job>
        
            )
        }
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
        <button onClick={()=> setDataLength(jobs.length)} className="btn btn-accent "> Show all jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;