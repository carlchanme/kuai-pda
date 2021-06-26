import React from 'react'
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getMeta} from "../store/meta";
import IpdasStandard from "../engine/ipdasStandard";

const Summary = () => {
    const {qualifyingCriteria, certificationCriteria, qualityCriteria} = IpdasStandard()
    const meta = useSelector(getMeta)

    const handleClick = (e) => {
        const hiddenElement = e.currentTarget.nextSibling;
        hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    }
    const checked = (isDone) => isDone ? "✅" : "❎"

    const {
        describeCondition: q1,
        describeDecision: q2,
        describeOptions: q3,
        describeOptionsPositive: q4,
        describeOptionsNegative: q5,
        consequenceOptions: q6,
    } = qualifyingCriteria;

    const qualifyingList = [
        `${checked(q1)} The decision aid describes the condition (health or other) related to the decision.`,
        `${checked(q2)} The patient decision aid explicitly states the decision that needs to be considered.`,
        `${checked(q3)} The patient decision aid describes the options available for the index decision.`,
        `${checked(q4)} The patient decision aid describes the positive features (benefits or advantages) of each option.`,
        `${checked(q5)} The patient decision aid describes the negative features (harms, side effects, or disadvantages) of each option.`,
        `${checked(q6)} The patient decision aid describes what it is like to experience the consequences of the options .`,
    ]

    const {
        showsNegativePositiveOption : c1,
        provideCitationOfEvidence : c2,
        showPublicationDate : c3,
        showUpdatePolicy : c4,
        showLevelOfUncertainty : c5,
        showFundingSource : c6,
        goalOfTest : c7,
        describeNextStepDetected : c8,
        describeNextStepNotDetected : c9,
        describeConsequenceIfNoScreening : c10,
    } = certificationCriteria

    const certificationList = [
        `${checked(c1)}`,
        `${checked(c2)}`,
        `${checked(c3)}`,
        `${checked(c4)}`,
        `${checked(c5)}`,
        `${checked(c6)}`,
        `${checked(c7)}`,
        `${checked(c8)}`,
        `${checked(c9)}`,
        `${checked(c10)}`,
    ]

    const {
        naturalCourseOfCondition : b1,
        canComparePositiveNegativeOption : b2,
        OutcomeProbabilitiesInfo : b3,
        specifiesGroupProbabilitiesApplied : b4,
        specifiesEventRatesOfOutcome : b5,
        compareOutcomeProbabilities : b6,
        compareProbabilitiesWithSameDenominator : b7,
        multiviewForProbabilities : b8,
        patientReflectOnFeature : b9,
        stepByStepGuidance : b10,
        toolForDiscussingOption : b11,
        clientPatientAssessDevelopment : b12,
        healthProfAssessDevelopment : b13,
        secondReviewByClientPatient : b14,
        secondReviewByProfessionals : b15,
        testedByPatients : b16,
        testedByPatientsPractitioners : b17,
        describeHowEvidenceSelected : b18,
        describeQualityOfEvidence : b19,
        containsAuthorDeveloperCredentials : b20,
        reportsReadabilityLevels : b21,
        evidenceToProveMatchOfPreference : b22,
        evidenceImproveKnowledge : b23,
        truePositiveTestResultInfo : b24,
        trueNegativeTestResultInfo : b25,
        falsePositiveTestResultInfo : b26,
        falseNegativeTestResultInfo : b27,
        chancesOfDetectionWithAndWithoutTest : b28,
    } = qualityCriteria

    const qualityList = [
        `${checked(b1)}`,
        `${checked(b2)}`,
        `${checked(b3)}`,
        `${checked(b4)}`,
        `${checked(b5)}`,
        `${checked(b6)}`,
        `${checked(b7)}`,
        `${checked(b8)}`,
        `${checked(b9)}`,
        `${checked(b10)}`,
        `${checked(b11)}`,
        `${checked(b12)}`,
        `${checked(b13)}`,
        `${checked(b14)}`,
        `${checked(b15)}`,
        `${checked(b16)}`,
        `${checked(b17)}`,
        `${checked(b18)}`,
        `${checked(b19)}`,
        `${checked(b20)}`,
        `${checked(b21)}`,
        `${checked(b22)}`,
        `${checked(b23)}`,
        `${checked(b24)}`,
        `${checked(b25)}`,
        `${checked(b26)}`,
        `${checked(b27)}`,
        `${checked(b28)}`,
    ]
    return (
        <>
            <h1>Decision Aid Summary</h1>
            <Table size="sm" striped bordered>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>{meta?.title}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Audience</td>
                    <td>{meta?.audience}</td>
                </tr>
                <tr>
                    <td>Options included</td>
                    <td>{meta?.optionsIncluded}</td>
                </tr>
                <tr>
                    <td>Last update or review date</td>
                    <td>{meta?.updatedDate}</td>
                </tr>
                <tr>
                    <td>Created date</td>
                    <td>{meta?.createdDate}</td>
                </tr>
                <tr>
                    <td>Format</td>
                    <td>{meta?.format}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>{meta?.author}</td>
                </tr>
                <tr>
                    <td>Developer</td>
                    <td>{meta?.developer}</td>
                </tr>
                <tr>
                    <td>Where was it developed?</td>
                    <td>{meta?.whereWasItDeveloped}</td>
                </tr>
                <tr>
                    <td>Health Condition</td>
                    <td>{meta?.healthCondition}</td>
                </tr>
                <tr>
                    <td>Type of decision aid</td>
                    <td>{meta?.typeOfDecisionAid}</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td>{meta?.language}</td>
                </tr>
                </tbody>
            </Table>

            <Table size="sm" striped bordered>
                <thead>
                <tr>
                    <th colSpan="2">Based on IPDAS criteria (International Patient Decision Aid Standards) this decision
                        aid (and/or supporting materials) meets:
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr onClick={handleClick}>
                    <td>Qualifying Criteria</td>
                    <td>0 out of 6</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        {qualifyingList.map((string, index) => <p key={`ql${index}`}>{string}</p>)}
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Certification Criteria</td>
                    <td>0 out of 10</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        {certificationList.map(string => <p>{string}</p>)}
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Quality Criteria</td>
                    <td>0 out of 28</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        {qualityList.map(string => <p>{string}</p>)}
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Summary
