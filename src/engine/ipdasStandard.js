import React, {useContext, useEffect, useState} from 'react';
import criteriaQualify from "./criterias/criteriaQualify";
import {
    showsNegativePositiveOption,
    provideCitationOfEvidence,
    showPublicationDate,
    showUpdatePolicy,
    showLevelOfUncertainty,
    showFundingSource,
    goalOfTest,
    describeNextStepDetected,
    describeNextStepNotDetected,
    describeConsequenceIfNoScreening,
} from "./criterias/criteriaCertification";
import {
    naturalCourseOfCondition,
    canComparePositiveNegativeOption,
    OutcomeProbabilitiesInfo,
    specifiesGroupProbabilitiesApplied,
    specifiesEventRatesOfOutcome,
    compareOutcomeProbabilities,
    compareProbabilitiesWithSameDenominator,
    multiviewForProbabilities,
    patientReflectOnFeature,
    stepByStepGuidance,
    toolForDiscussingOption,
    clientPatientAssessDevelopment,
    healthProfAssessDevelopment,
    secondReviewByClientPatient,
    secondReviewByProfessionals,
    testedByPatients,
    testedByPatientsPractitioners,
    describeHowEvidenceSelected,
    describeQualityOfEvidence,
    containsAuthorDeveloperCredentials,
    reportsReadabilityLevels,
    evidenceToProveMatchOfPreference,
    evidenceImproveKnowledge,
    truePositiveTestResultInfo,
    trueNegativeTestResultInfo,
    falsePositiveTestResultInfo,
    falseNegativeTestResultInfo,
    chancesOfDetectionWithAndWithoutTest,
} from "./criterias/criteriaQuality";

function IpdasStandard(pages) {
    const [qualifyingCriteria, setQualifyingCriteria] = useState({})
    const [certificationCriteria, setCertificationCriteria] = useState({})
    const [qualityCriteria, setQualityCriteria] = useState({})

    useEffect(() => {
        setQualifyingCriteria( {
            describeCondition: criteriaQualify.describeCondition(pages),
            describeDecision: criteriaQualify.describeDecision(pages),
            describeOptions: criteriaQualify.describeOptions(pages),
            describeOptionsPositive: criteriaQualify.describeOptionsPositive(pages),
            describeOptionsNegative: criteriaQualify.describeOptionsNegative(pages),
            consequenceOptions: criteriaQualify.consequenceOptions(pages),
        })
        setCertificationCriteria( {
            showsNegativePositiveOption: showsNegativePositiveOption(pages),
            provideCitationOfEvidence: provideCitationOfEvidence(pages),
            showPublicationDate: showPublicationDate(pages),
            showUpdatePolicy: showUpdatePolicy(pages),
            showLevelOfUncertainty: showLevelOfUncertainty(pages),
            showFundingSource: showFundingSource(pages),
            goalOfTest: goalOfTest(pages),
            describeNextStepDetected: describeNextStepDetected(pages),
            describeNextStepNotDetected: describeNextStepNotDetected(pages),
            describeConsequenceIfNoScreening: describeConsequenceIfNoScreening(pages),
        })
        setQualityCriteria({
            naturalCourseOfCondition: naturalCourseOfCondition(pages),
            canComparePositiveNegativeOption: canComparePositiveNegativeOption(pages),
            OutcomeProbabilitiesInfo: OutcomeProbabilitiesInfo(pages),
            specifiesGroupProbabilitiesApplied: specifiesGroupProbabilitiesApplied(pages),
            specifiesEventRatesOfOutcome: specifiesEventRatesOfOutcome(pages),
            compareOutcomeProbabilities: compareOutcomeProbabilities(pages),
            compareProbabilitiesWithSameDenominator: compareProbabilitiesWithSameDenominator(pages),
            multiviewForProbabilities:multiviewForProbabilities(pages),
            patientReflectOnFeature:patientReflectOnFeature(pages),
            stepByStepGuidance:stepByStepGuidance(pages),
            toolForDiscussingOption:toolForDiscussingOption(pages),
            clientPatientAssessDevelopment:clientPatientAssessDevelopment(pages),
            healthProfAssessDevelopment:healthProfAssessDevelopment(pages),
            secondReviewByClientPatient:secondReviewByClientPatient(pages),
            secondReviewByProfessionals:secondReviewByProfessionals(pages),
            testedByPatients:testedByPatients(pages),
            testedByPatientsPractitioners:testedByPatientsPractitioners(pages),
            describeHowEvidenceSelected:describeHowEvidenceSelected(pages),
            describeQualityOfEvidence: describeQualityOfEvidence(pages),
            containsAuthorDeveloperCredentials:containsAuthorDeveloperCredentials(pages),
            reportsReadabilityLevels:reportsReadabilityLevels(pages),
            evidenceToProveMatchOfPreference:evidenceToProveMatchOfPreference(pages),
            evidenceImproveKnowledge:evidenceImproveKnowledge(pages),
            truePositiveTestResultInfo:truePositiveTestResultInfo(pages),
            trueNegativeTestResultInfo:trueNegativeTestResultInfo(pages),
            falsePositiveTestResultInfo:falsePositiveTestResultInfo(pages),
            falseNegativeTestResultInfo:falseNegativeTestResultInfo(pages),
            chancesOfDetectionWithAndWithoutTest:chancesOfDetectionWithAndWithoutTest(pages),
        })
    },[])

    return {qualifyingCriteria, certificationCriteria, qualityCriteria}
}

export default IpdasStandard;