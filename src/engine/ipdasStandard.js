import React, {useEffect, useState} from 'react';
import {
    clarifyValueOfOptions,
    describeCondition,
    describeDecision,
    identifyAudience,
    listOptions,
    negativeOptions, positiveOptions
} from "./criterias/criteriaDefinition";
import {
    authorBiased, authorDeveloperCredentials,
    comparePositiveNegativeOptions,
    compareProbabilities, lastUpdated, readabilityLevel, reference, reportFunding,
    showsNegativePositiveOption
} from "./criterias/criteriaBiased";
import {
    chancesOfDetectionThroughScreening,
    informationWithoutScreening,
    stepsBasedOnResults,
    testInformation
} from "./criterias/criteriaScreening";
import {
    balanceInformation,
    helpedUser,
    improvedMatchWithOptions,
    informationAboutOutcomes,
    naturalCourseOfCondition,
    previousUserFeedback, previousUserReviewed,
    showDiagramsOfOptions,
    showProbabilities,
    showProbabilitiesSpecificTime,
    showProbabilitiesTimePeriod,
    testedByPreviousUser,
    testedByPreviousUsersAccepted
} from "./criterias/criteriaQuality";

function IpdasStandard(meta) {
    const [definitionCriteria, setDefinitionCriteria] = useState({})
    const [biasedCriteria, setBiasedCriteria] = useState({})
    const [testingCriteria, setTestingCriteria] = useState({})
    const [qualityCriteria, setQualityCriteria] = useState({})

    useEffect(() => {
        setDefinitionCriteria( {
            describeCondition: describeCondition(meta),
            describeDecision: describeDecision(meta),
            identifyAudience: identifyAudience(meta),
            listOptions: listOptions(meta),
            negativeOptions: negativeOptions(meta),
            positiveOptions: positiveOptions(meta),
            clarifyValues: clarifyValueOfOptions(meta)
        })
        setBiasedCriteria( {
            compareOptions: comparePositiveNegativeOptions(meta),
            showOptions: showsNegativePositiveOption(meta),
            showProbabilities: compareProbabilities(meta),
            reportFunding: reportFunding(meta),
            authorBiased: authorBiased(meta),
            authorCredentials: authorDeveloperCredentials(meta),
            lastUpdate: lastUpdated(meta),
            readabilityLevel: readabilityLevel(meta),
            reference: reference(meta)
        })
        setTestingCriteria({
            testReason: testInformation(meta),
            stepsAfter: stepsBasedOnResults(meta),
            detection: chancesOfDetectionThroughScreening(meta),
            noScreening: informationWithoutScreening(meta)
        })
        setQualityCriteria({
            naturalCause: naturalCourseOfCondition(meta),
            procedures: informationWithoutScreening(meta),
            outcomes: informationAboutOutcomes(meta),
            probabilitiesTime: showProbabilitiesSpecificTime(meta),
            probabilitiesPeriod: showProbabilitiesTimePeriod(meta),
            optionsDiagram: showDiagramsOfOptions(meta),
            userFeedback: previousUserFeedback(meta),
            userReview: previousUserReviewed(meta),
            testByUser: testedByPreviousUser(meta),
            textAndAccepted: testedByPreviousUsersAccepted(meta),
            balanceInformation: balanceInformation(meta),
            helpedUser: helpedUser(meta),
            improveMatch: improvedMatchWithOptions(meta),
        })
    },[])

    return {definitionCriteria, biasedCriteria, testingCriteria, qualityCriteria}
}

export default IpdasStandard;