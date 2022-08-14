import React from 'react';
import "./style.css";

type JobCardProps = {
    jobData : {
        role : string,
        company : string,
        location : string
    }
}


const JobCard : React.FC<JobCardProps> = (props) => {

    const {jobData} = props;

    return (
        <div className='card-root'>
            <div>
                <span>{jobData.role}</span><br/>
                <em>{jobData.company}</em><br/>
                <i>{jobData.location}</i>
            </div>
        </div>
    )
}

export default JobCard;