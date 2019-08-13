import React, { Component } from 'react'
import Job from './Job';

class JobTable extends Component {

    render() {
        const jobs = this.props.jobs,
              filterText = this.props.filterText,
              rows = [];

        jobs.forEach( (job) => {
            if( job.title.indexOf(filterText) === -1 ) { return; }
            rows.push(
                <Job job={job} key={job.jobId}/>
            )
        })

        return(
            <div className="jobs">
                <div className="jobs__inner">
                    {rows}
                </div>
            </div>
        )
    }
}

export default JobTable