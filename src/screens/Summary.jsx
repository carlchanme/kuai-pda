import React from 'react'
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getIPDAS} from "../store/ipdas";
import {getMeta} from "../store/meta";

const Summary = () => {
    const standards = {qualifyingCriteria: {}, certificationCriteria: {}, qualityCriteria: {}}
    const ipdas = useSelector(getIPDAS)
    const meta = useSelector(getMeta)

    const handleClick = (e) => {
        const hiddenElement = e.currentTarget.nextSibling;
        hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    }
    const checked = (isDone) => isDone ? "✅" : "❎"
    const {qualifyingCriteria, certificationCriteria, qualityCriteria} = standards

    const qualifyingList = [
        `${checked(qualifyingCriteria.describeCondition)} The decision aid describes the condition (health or other) related to the decision.`,
        `${checked(qualifyingCriteria.describeDecision)} The patient decision aid explicitly states the decision that needs to be considered.`,
        `${checked(ipdas.describeOptions)} The patient decision aid describes the options available for the index decision.`,
        `${checked(qualifyingCriteria.describeOptionsPositive)} The patient decision aid describes the positive features (benefits or advantages) of each option.`,
        `${checked(qualifyingCriteria.describeOptionsNegative)} The patient decision aid describes the negative features (harms, side effects, or disadvantages) of each option.`,
        `${checked(qualifyingCriteria.consequenceOptions)} The patient decision aid describes what it is like to experience the consequences of the options .`,
    ]

    const certificationList = []

    const qualityList = []
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
                        {qualifyingList.map(string => <p>{string}</p>)}
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
