import React, {useEffect, useState} from 'react';
import criteriaQualify from "./criterias/criteriaQualify";
import criteriaCertification from "./criterias/criteriaCertification";
import criteriaQuality from "./criterias/criteriaQuality";
import {useSelector} from "react-redux";
import {getMeta} from "../store/meta";

function IpdasStandard() {
    const [qualifyingCriteria, setQualifyingCriteria] = useState({})
    const [certificationCriteria, setCertificationCriteria] = useState({})
    const [qualityCriteria, setQualityCriteria] = useState({})
    const meta = useSelector(getMeta)
    const qualify = criteriaQualify(meta)
    const quality = criteriaQuality(meta)
    const certification = criteriaCertification(meta)
    
    useEffect(() => {
        setQualifyingCriteria( {
            describeCondition: qualify.describeCondition(),
            describeDecision: qualify.describeDecision(),
            describeOptions: qualify.describeOptions(),
            describeOptionsPositive: qualify.describeOptionsPositive(),
            describeOptionsNegative: qualify.describeOptionsNegative(),
            consequenceOptions: qualify.consequenceOptions(),
        })
        setCertificationCriteria( {
            showsNegativePositiveOption: certification.showsNegativePositiveOption(),
            provideCitationOfEvidence: certification.provideCitationOfEvidence(),
            showPublicationDate: certification.showPublicationDate(),
            showUpdatePolicy: certification.showUpdatePolicy(),
            showLevelOfUncertainty: certification.showLevelOfUncertainty(),
            showFundingSource: certification.showFundingSource(),
            goalOfTest: certification.goalOfTest(),
            describeNextStepDetected: certification.describeNextStepDetected(),
            describeNextStepNotDetected: certification.describeNextStepNotDetected(),
            describeConsequenceIfNoScreening: certification.describeConsequenceIfNoScreening(),
        })
        setQualityCriteria({
            naturalCourseOfCondition: quality.naturalCourseOfCondition(),
            canComparePositiveNegativeOption: quality.canComparePositiveNegativeOption(),
            OutcomeProbabilitiesInfo: quality.OutcomeProbabilitiesInfo(),
            specifiesGroupProbabilitiesApplied: quality.specifiesGroupProbabilitiesApplied(),
            specifiesEventRatesOfOutcome: quality.specifiesEventRatesOfOutcome(),
            compareOutcomeProbabilities: quality.compareOutcomeProbabilities(),
            compareProbabilitiesWithSameDenominator: quality.compareProbabilitiesWithSameDenominator(),
            multiviewForProbabilities: quality.multiviewForProbabilities(),
            patientReflectOnFeature: quality.patientReflectOnFeature(),
            stepByStepGuidance: quality.stepByStepGuidance(),
            toolForDiscussingOption: quality.toolForDiscussingOption(),
            clientPatientAssessDevelopment: quality.clientPatientAssessDevelopment(),
            healthProfAssessDevelopment: quality.healthProfAssessDevelopment(),
            secondReviewByClientPatient: quality.secondReviewByClientPatient(),
            secondReviewByProfessionals: quality.secondReviewByProfessionals(),
            testedByPatients: quality.testedByPatients(),
            testedByPatientsPractitioners: quality.testedByPatientsPractitioners(),
            describeHowEvidenceSelected: quality.describeHowEvidenceSelected(),
            describeQualityOfEvidence: quality.describeQualityOfEvidence(),
            containsAuthorDeveloperCredentials: quality.containsAuthorDeveloperCredentials(),
            reportsReadabilityLevels: quality.reportsReadabilityLevels(),
            evidenceToProveMatchOfPreference: quality.evidenceToProveMatchOfPreference(),
            evidenceImproveKnowledge: quality.evidenceImproveKnowledge(),
            truePositiveTestResultInfo: quality.truePositiveTestResultInfo(),
            trueNegativeTestResultInfo: quality.trueNegativeTestResultInfo(),
            falsePositiveTestResultInfo: quality.falsePositiveTestResultInfo(),
            falseNegativeTestResultInfo: quality.falseNegativeTestResultInfo(),
            chancesOfDetectionWithAndWithoutTest: quality.chancesOfDetectionWithAndWithoutTest(),
        })
    },[meta])

    return {qualifyingCriteria, certificationCriteria, qualityCriteria}
}

export default IpdasStandard;