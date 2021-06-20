import React from 'react'
import {Table} from "react-bootstrap";
import {Heading, Heading2} from "../components/fonts";

const Summary = (meta, standards) => () => {

    const handleClick = (e) => {
        const hiddenElement = e.currentTarget.nextSibling;
        hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    }
    const checked = (isDone) => isDone ? <span>✅</span>:<span>❎</span>
    const {definitionCriteria, biasedCriteria, testingCriteria, qualityCriteria} = standards
    return (
        <>
            <Heading>Decision Aid Summary</Heading>
            <Table size="sm" striped bordered>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>{meta.title}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Audience</td>
                    <td>{meta.audience}</td>
                </tr>
                <tr>
                    <td>Options included</td>
                    <td>{meta.optionsIncluded}</td>
                </tr>
                <tr>
                    <td>Last update or review date</td>
                    <td>{meta.updatedDate}</td>
                </tr>
                <tr>
                    <td>Created date</td>
                    <td>{meta.createdDate}</td>
                </tr>
                <tr>
                    <td>Format</td>
                    <td>{meta.format}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>{meta.author}</td>
                </tr>
                <tr>
                    <td>Developer</td>
                    <td>{meta.developer}</td>
                </tr>
                <tr>
                    <td>Where was it developed?</td>
                    <td>{meta.whereWasItDeveloped}</td>
                </tr>
                <tr>
                    <td>Health Condition</td>
                    <td>{meta.healthCondition}</td>
                </tr>
                <tr>
                    <td>Type of decision aid</td>
                    <td>{meta.typeOfDecisionAid}</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td>{meta.language}</td>
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
                    <td>Criteria to be defined as a patient decision aid</td>
                    <td>7 out of 7</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        <p>{checked(definitionCriteria.describeCondition)}The decision aid describes the condition (health or other) related to the decision.</p>
                        <p>{checked(definitionCriteria.describeDecision)}️The decision aid describes the decision that needs to be considered (the index
                            decision).</p>
                        <p>{checked(definitionCriteria.identifyAudience)}The decision aid identifies the target audience.</p>
                        <p>{checked(definitionCriteria.listOptions)}The decision aid lists the options (health care or other).	</p>
                        <p>{checked(definitionCriteria.negativeOptions)}The decision aid has information about the positive features of the options (e.g. benefits, advantages).</p>
                        <p>{checked(definitionCriteria.positiveOptions)}The decision aid has information about negative features of the options (e.g. harms, side
                            effects, disadvantages).</p>
                        <p>{checked(definitionCriteria.clarifyValues)}The decision aid helps patients clarify their values for outcomes of options by: a) asking
                            people to think about which positive and negative features of the options matter most to
                            them AND/OR b) describing each option to help patients imagine the physical, social, and /or
                            psychological effect.</p>
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Criteria to lower the risk of making a biased decision</td>
                    <td>7 out of 9</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        <p>{checked(biasedCriteria.compareOptions)}️The decision aid makes it possible to compare the positive and negative features of the
                            available options.showOptions</p>
                        <p>{checked(biasedCriteria.showOptions)}The decision aid shows the negative and positive features of the options with equal
                            detail.</p>
                        <p>{checked(biasedCriteria.showProbabilities)}The decision aid compares probabilities (e.g. chance of a disease, benefit, harm, or side
                            effect) of options using the same denominator.</p>
                        <p>{checked(biasedCriteria.reportFunding)}️The decision aid (or available technical documents) reports funding sources for
                            development.</p>
                        <p>{checked(biasedCriteria.authorBiased)}️The decision aid reports whether authors of the decision aid or their affiliations stand to
                            gain or lose by choices people make after using the decision aid.</p>
                        <p>{checked(biasedCriteria.authorCredentials)}The decision aid includes authors/developers' credentials or qualifications.</p>
                        <p>{checked(biasedCriteria.lastUpdate)}The decision aid reports the date when it was last updated.</p>
                        <p>{checked(biasedCriteria.readabilityLevel)}The decision aid (or available technical document) reports readability levels.</p>
                        <p>{checked(biasedCriteria.reference)}The decision aid provides references to scientific evidence used.</p>
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Other criteria for decision aids about screening or testing</td>
                    <td>4 out of 4</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        <p>{checked(testingCriteria.testReason)}️The decision aid has information about what the test is designed to measure.</p>
                        <p>{checked(testingCriteria.stepsAfter)}The decision aid describes possible next steps based on the test results.</p>
                        <p>{checked(testingCriteria.detection)}The decision aid has information about the chances of disease being found with and without
                            screening.</p>
                        <p>{checked(testingCriteria.noScreening)}The decision aid has information about detection and treatment of disease that would never
                            have caused problems if screening had not been done.</p>
                    </td>
                </tr>
                <tr onClick={handleClick}>
                    <td>Other criteria indicating quality</td>
                    <td>13 out of 13</td>
                </tr>
                <tr className="collapse">
                    <td colSpan="2">
                        <p>{checked(qualityCriteria.naturalCause)}The decision aid describes what happens in the natural course of the condition (health or
                            other) if no action is taken.</p>
                        <p>{checked(qualityCriteria.procedures)}The decision aid has information about the procedures involved (e.g. what is done before,
                            during, and after the health care option).</p>
                        <p>{checked(qualityCriteria.outcomes)}The information about outcomes of options (positive and negative) includes the chances they
                            may happen.</p>
                        <p>{checked(qualityCriteria.probabilitiesTime)}The decision aid presents probabilities using event rates in a defined group of people for
                            a specified time.</p>
                        <p>{checked(qualityCriteria.probabilitiesPeriod)}The decision aid compares probabilities of options over the same period of time.</p>
                        <p>{checked(qualityCriteria.optionsDiagram)}The decision aid uses the same scales in diagrams comparing options.</p>
                        <p>{checked(qualityCriteria.userFeedback)}Users (people who previously faced the decision) were asked what they need to prepare them
                            to discuss a specific decision.</p>
                        <p>{checked(qualityCriteria.userReview)}The decision aid was reviewed by people who previously faced the decision who were not
                            involved in its development and field testing.</p>
                        <p>{checked(qualityCriteria.testByUser)}People who were facing the decision field tested the decision aid.</p>
                        <p>{checked(qualityCriteria.textAndAccepted)}Field testing showed that the decision aid was acceptable to users (the general public &
                            practitioners).</p>
                        <p>{checked(qualityCriteria.balanceInformation)}Field testing showed that people who were undecided felt that the information was presented
                            in a balanced way.</p>
                        <p>{checked(qualityCriteria.helpedUser)}There is evidence that the decision aid (or one based on the same template) helps people
                            know about the available options and their features.</p>
                        <p>{checked(qualityCriteria.improveMatch)}There is evidence that the decision aid (or one based on the same template) improves the
                            match between the features that matter most to the informed person and the option that is
                            chosen.</p>
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Summary
