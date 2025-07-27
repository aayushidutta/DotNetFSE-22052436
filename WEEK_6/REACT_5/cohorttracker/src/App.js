import React from 'react';
import CohortDetails from './CohortDetails'; 

function App() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Cohorts Details</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <CohortDetails
                    cohortName="INTADMF10 - .NET FSD"
                    startedOn="20-Feb-2022"
                    currentStatus="Scheduled"
                    coach="Rohan Kumar"
                    trainer="Ashu Sharma"
                />
                <CohortDetails
                    cohortName="ADM21JF014 - Java FSD"
                    startedOn="10-Dec-2021"
                    currentStatus="Ongoing"
                    coach="Partha Mukherjee"
                    trainer="Sanjay Gupta"
                />
                <CohortDetails
                    cohortName="CDBJF21025 - Java FSD"
                    startedOn="24-Nov-2021"
                    currentStatus="Ongoing"
                    coach="Shreya Singh"
                    trainer="Deepa Verma"
                />
            </div>
        </div>
    );
}

export default App;
