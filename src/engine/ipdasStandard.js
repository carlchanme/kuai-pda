import React, {useEffect, useState} from 'react';
import {
    describeCondition,
    describeDecision,
    describeOptions,
    describeOptionsPositive,
    describeOptionsNegative,
    consequenceOptions,
} from "./criterias/criteriaQualify";
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

function IpdasStandard(data) {
    const [qualifyingCriteria, setQualifyingCriteria] = useState({})
    const [certificationCriteria, setCertificationCriteria] = useState({})
    const [qualityCriteria, setQualityCriteria] = useState({})

    useEffect(() => {
        setQualifyingCriteria( {
            describeCondition: describeCondition(data),
            describeDecision: describeDecision(data),
            describeOptions: describeOptions(data),
            describeOptionsPositive: describeOptionsPositive(data),
            describeOptionsNegative: describeOptionsNegative(data),
            consequenceOptions: consequenceOptions(data),
        })
        setCertificationCriteria( {
            showsNegativePositiveOption: showsNegativePositiveOption(data),
            provideCitationOfEvidence: provideCitationOfEvidence(data),
            showPublicationDate: showPublicationDate(data),
            showUpdatePolicy: showUpdatePolicy(data),
            showLevelOfUncertainty: showLevelOfUncertainty(data),
            showFundingSource: showFundingSource(data),
            goalOfTest: goalOfTest(data),
            describeNextStepDetected: describeNextStepDetected(data),
            describeNextStepNotDetected: describeNextStepNotDetected(data),
            describeConsequenceIfNoScreening: describeConsequenceIfNoScreening(data),
        })
        setQualityCriteria({
            naturalCourseOfCondition: naturalCourseOfCondition(data),
            canComparePositiveNegativeOption: canComparePositiveNegativeOption(data),
            OutcomeProbabilitiesInfo: OutcomeProbabilitiesInfo(data),
            specifiesGroupProbabilitiesApplied: specifiesGroupProbabilitiesApplied(data),
            specifiesEventRatesOfOutcome: specifiesEventRatesOfOutcome(data),
            compareOutcomeProbabilities: compareOutcomeProbabilities(data),
            compareProbabilitiesWithSameDenominator: compareProbabilitiesWithSameDenominator(data),
            multiviewForProbabilities:multiviewForProbabilities(data),
            patientReflectOnFeature:patientReflectOnFeature(data),
            stepByStepGuidance:stepByStepGuidance(data),
            toolForDiscussingOption:toolForDiscussingOption(data),
            clientPatientAssessDevelopment:clientPatientAssessDevelopment(data),
            healthProfAssessDevelopment:healthProfAssessDevelopment(data),
            secondReviewByClientPatient:secondReviewByClientPatient(data),
            secondReviewByProfessionals:secondReviewByProfessionals(data),
            testedByPatients:testedByPatients(data),
            testedByPatientsPractitioners:testedByPatientsPractitioners(data),
            describeHowEvidenceSelected:describeHowEvidenceSelected(data),
            describeQualityOfEvidence: describeQualityOfEvidence(data),
            containsAuthorDeveloperCredentials:containsAuthorDeveloperCredentials(data),
            reportsReadabilityLevels:reportsReadabilityLevels(data),
            evidenceToProveMatchOfPreference:evidenceToProveMatchOfPreference(data),
            evidenceImproveKnowledge:evidenceImproveKnowledge(data),
            truePositiveTestResultInfo:truePositiveTestResultInfo(data),
            trueNegativeTestResultInfo:trueNegativeTestResultInfo(data),
            falsePositiveTestResultInfo:falsePositiveTestResultInfo(data),
            falseNegativeTestResultInfo:falseNegativeTestResultInfo(data),
            chancesOfDetectionWithAndWithoutTest:chancesOfDetectionWithAndWithoutTest(data),
        })
    },[])

    return {qualifyingCriteria, certificationCriteria, qualityCriteria}
}

export default IpdasStandard;