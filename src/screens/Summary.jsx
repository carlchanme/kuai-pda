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

    const countTrue = (criteria) => {
        let count = 0;
        for (const [key, value] of Object.entries(criteria)) {
            if(value) count += 1
        }
        return count
    }

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
        `${checked(c1)} The patient decision aid shows the negative and positive features of options with equal detail (e.g., using similar fonts, sequence, presentation of statistical information).`,
        `${checked(c2)} The patient decision aid (or associated documentation) provides citations to the evidence selected.`,
        `${checked(c3)} The patient decision aid (or associated documentation) provides a production or publication date.`,
        `${checked(c4)} The patient decision aid (or associated documentation) provides information about the update policy.`,
        `${checked(c5)} The patient decision aid provides information about the levels of uncertainty around event or outcome probabilities (e.g., by giving a range or by using phases such as ‘‘our best estimate is . . .’’).`,
        `${checked(c6)} The patient decision aid (or associated documentation) provides information about the funding source used for development.`,
        `${checked(c7)} The patient decision aid describes what the test is designed to measure.`,
        `${checked(c8)} If the test detects the condition or problem, the patient decision aid describes the next steps typically taken.`,
        `${checked(c9)} The patient decision aid describes the next steps if the condition or problem is not detected.`,
        `${checked(c10)} The patient decision aid has information about the consequences of detecting the condition or disease that would never have caused problems if screening had not been done (lead time bias).`,
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
        `${checked(b1)} The patient decision aid describes the natural course of the health condition or problem,  if no action is taken (when appropriate).`,
        `${checked(b2)} The patient decision aid makes it possible to compare the positive and negative features of the available options.`,
        `${checked(b3)} The patient decision aid provides information about outcome probabilities associated with the options.`,
        `${checked(b4)} The patient decision aid specifies the defined group (reference class) of patients for whom the outcome probabilities apply.`,
        `${checked(b5)} The patient decision aid specifies the event rates for the outcome probabilities.`,
        `${checked(b6)} The patient decision aid allows the user to compare outcome probabilities across options using the same time period (when feasible).`,
        `${checked(b7)} The patient decision aid allows the user to compare outcome probabilities across options using the same denominator.`,
        `${checked(b8)} The patient decision aid provides more than 1 way of viewing the probabilities (e.g., words, numbers, and diagrams).`,
        `${checked(b9)} The patient decision aid asks patients to think about which positive and negative features of the options matter most to them (implicitly or explicitly).`,
        `${checked(b10)} The patient decision aid provides a step-by-step way to make a decision.`,
        `${checked(b11)} The patient decision aid includes tools like worksheets or lists of questions to use when discussing options with a practitioner.`,
        `${checked(b12)} The development process included a needs assessment with clients or patients.`,
        `${checked(b13)} The development process included a needs assessment with health professionals.`,
        `${checked(b14)} The development process included review by clients/patients not involved in producing the decision support intervention.`,
        `${checked(b15)} The development process included review by professionals not involved in producing the decision support intervention. (3.54)`,
        `${checked(b16)} The patient decision aid was field tested with patients who were facing the decision. (4.56)`,
        `${checked(b17)} The patient decision aid was field tested with practitioners who counsel patients who face the decision.`,
        `${checked(b18)} The patient decision aid (or associated documentation) describes how research evidence was selected or synthesized.`,
        `${checked(b19)} The patient decision aid (or associated documentation) describes the quality of the research evidence used.`,
        `${checked(b20)} The patient decision aid includes authors’/ developers’ credentials or qualifications.`,
        `${checked(b21)} The patient decision aid (or associated documentation) reports readability levels (using 1 or more of the available scales).`,
        `${checked(b22)} There is evidence that the patient decision aid improves the match between the preferences of the informed patient and the option that is chosen. (3.44)`,
        `${checked(b23)} There is evidence that the patient decision aid helps patients improve their knowledge about options’ features. (3.67)`,
        `${checked(b24)} The patient decision aid includes information about the chances of having a true-positive test result.(4.74)`,
        `${checked(b25)} The patient decision aid includes information about the chances of having a true-negative test result`,
        `${checked(b26)} The patient decision aid includes information about the chances of having a false-positive test result.`,
        `${checked(b27)} The patient decision aid includes information about the chances of having a false-negative test result.`,
        `${checked(b28)} The patient decision aid describes the chances the disease is detected with and without the use of the test.`,
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
                    <td>{countTrue(qualifyingCriteria)} out of 6</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        {qualifyingList.map((string, index) => <p key={`ql${index}`}>{string}</p>)}
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Certification Criteria</td>
                    <td>{countTrue(certificationCriteria)} out of 10</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        {certificationList.map(string => <p>{string}</p>)}
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Quality Criteria</td>
                    <td>{countTrue(qualityCriteria)} out of 28</td>
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
