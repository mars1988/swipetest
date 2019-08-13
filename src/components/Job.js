import React, { Component } from 'react'
import { convertDate } from '../lib/convertDate';


/*****************
    support functions 
******************/

function getPay( pay ) {
    return '$' +  (pay / 100).toFixed(2) + '/hour';
}

function getWorkingDays( shifts ) {
    const startDate = convertDate(shifts[0].startDate);
    const endDate = convertDate(shifts[shifts.length - 1].endDate);

    return `${startDate.day}, ${startDate.date} - ${endDate.day}, ${endDate.date}`;
}

function getTelNum( number) {
    return `tel:${number.replace(/\D/g, '')}`;
}

function getMapUrl( address ) {
    const mapQuery = address.replace(/\s/g, '+').replace(/,/g, '%2C');
    return `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
}




class Shifts extends Component {
    render() {
        const {shift} = this.props,
              date    = convertDate(shift.startDate);
              
        return (
            <tr>
                <td>{date.day}, </td> 
                <td>{date.date} </td>
                <td>{date.time}</td>
                <td>{date.timezone}</td>
            </tr>
        ) 
    } 
}


class Job extends Component {
    
    render() {
        const job     = this.props.job,
              title   = job.title,
              logo    = job.company.logo,
              company = job.company.name,
              address = job.company.address,
              branch  = job.branch,
              shifts  = job.shifts,
              pay     = getPay(job.wagePerHourInCents),
              branchPhoneNumber = job.branchPhoneNumber,
              workingdays  = getWorkingDays(shifts),
              telNum            = getTelNum(branchPhoneNumber),
              mapUrl            = getMapUrl(address);

        return(
            <div className="jobs__item">
                <div className="jobs__detail">
                    <div className="jobs__detail-left">
                        <img className="jobs__img" src={logo} alt="logo"/>
                    </div>
                    <div className="jobs__detail-right">
                        <div className="jobs__title">{title}</div>
                        <div className="jobs__company">{company}</div>
                        <div className="jobs__pay">{pay}</div>
                        <div className="jobs__day">{workingdays}</div>
                    </div>
                </div>

                <div className="jobs__shifts">
                    <div className="jobs__shifts-info">
                        If you like this job you are agreeing to work ALL DAYS
                    </div>
                    <div className="jobs__shift">
                        <table>
                            <tbody>
                                {shifts.map( (shift, i) => <Shifts key={i} shift={shift}/>)}
                            </tbody>
                        </table> 
                    </div>
                </div>

                <div className="jobs__location">
                    <p>Location</p>
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="jobs__location-url" title={address}>
                        {address}
                     </a>
                </div>

                <div className="jobs__branch">
                    <h3>Branch</h3>
                    <span className="jobs__branch-name">{branch}</span>
                    <a href={telNum} className="jobs__branch-phone">{branchPhoneNumber}</a>
                </div>

                <div className="jobs__summary">
                    <button type="button" name="reject" className="jobs__button">
                        <span className="jobs__button-text">No thanks</span>
                    </button>
                    <button type="button" name="reject" className="jobs__button">
                        <span className="jobs__button-text">I'll take it</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Job