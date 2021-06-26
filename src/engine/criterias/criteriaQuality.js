import React from 'react';

const criteriaQuality = (meta) => {
    const naturalCourseOfCondition = (meta) => {
        // 1.	The patient decision aid describes the natural course of the health condition or problem, 
        // if no action is taken (when appropriate). 
        return false
    }

    const canComparePositiveNegativeOption = (meta) => {
        // 2.	The patient decision aid makes it possible to compare the positive and
        // negative features of the available options.
        return false
    }

    const OutcomeProbabilitiesInfo = (meta) => {
        // 3.	The patient decision aid provides information about outcome probabilities associated with the options
        return false
    }

    const specifiesGroupProbabilitiesApplied = (meta) => {
        // 4.	The patient decision aid specifies the defined group (reference class) of patients for
        // whom the outcome probabilities apply
        return false
    }

    const specifiesEventRatesOfOutcome = (meta) => {
        // 5.	The patient decision aid specifies the event rates for the outcome probabilities
        return false
    }

    const compareOutcomeProbabilities = (meta) => {
        // 6.	The patient decision aid allows the user to compare outcome probabilities across options
        // using the same time period (when feasible).
        return false
    }

    const compareProbabilitiesWithSameDenominator = (meta) => {
        // 7.	The patient decision aid allows the user to compare outcome probabilities across options using
        // the same denominator
        return false
    }

    const multiviewForProbabilities = (meta) => {
        // 8.	The patient decision aid provides more than 1 way of viewing the probabilities
        // (e.g., words, numbers, and diagrams).
        return false
    }

    const patientReflectOnFeature = (meta) => {
        // 9.	The patient decision aid asks patients to think about which positive and negative features of the
        // options matter most to them (implicitly or explicitly).
        return false
    }

    const stepByStepGuidance = (meta) => {
        // 10.	The patient decision aid provides a step-by-step way to make a decision.
        return false
    }

    const toolForDiscussingOption = (meta) => {
        // 11.	The patient decision aid includes tools like worksheets or lists of questions to use
        // when discussing options with a practitioner.
        return false
    }

    const clientPatientAssessDevelopment = (meta) => {
        // 12.	The development process included a needs assessment with clients or patients
        return false
    }

    const healthProfAssessDevelopment = (meta) => {
        // 13.	The development process included a needs assessment with health professionals
        return false
    }

    const secondReviewByClientPatient = (meta) => {
        // 14.	The development process included review by clients/patients not involved in producing the decision support intervention. (
        return false
    }

    const secondReviewByProfessionals = (meta) => {
        // 15.	The development process included review by professionals not involved in producing the decision support intervention. (3.54)
        return false
    }

    const testedByPatients = (meta) => {
        // 16.	The patient decision aid was field tested with patients who were facing the decision. (4.56)
        return false
    }

    const testedByPatientsPractitioners = (meta) => {
        // 17.	The patient decision aid was field tested with practitioners who counsel patients who face the decision.
        return false
    }

    const describeHowEvidenceSelected = (meta) => {
        // 18.	The patient decision aid (or associated documentation) describes how research evidence was selected or synthesized
        return false
    }

    const describeQualityOfEvidence = (meta) => {
        // 19.	The patient decision aid (or associated documentation) describes the quality of the research evidence used.
        return false
    }

    const containsAuthorDeveloperCredentials = (meta) => {
        //  20.	The patient decision aid includes authors’/ developers’ credentials or qualifications.
        return false
    }

    const reportsReadabilityLevels = (meta) => {
        // 21.	The patient decision aid (or associated documentation) reports readability levels (using 1 or more of the available scales).
        return false
    }

    const evidenceToProveMatchOfPreference = (meta) => {
        // 22.	There is evidence that the patient decision aid improves the match between the preferences of the informed patient and the option that is chosen. (3.44)
        return false
    }

    const evidenceImproveKnowledge = (meta) => {
        // 23.	There is evidence that the patient decision aid helps patients improve their knowledge about options’ features. (3.67)
        return false
    }

    const truePositiveTestResultInfo = (meta) => {
        // 24.	The patient decision aid includes information about the chances of having a true-positive test result.(4.74)
        return false
    }

    const trueNegativeTestResultInfo = (meta) => {
        // 25.	The patient decision aid includes information about the chances of having a true-negative test result
        return false
    }

    const falsePositiveTestResultInfo = (meta) => {
        // 26.	The patient decision aid includes information about the chances of having a false-positive test result.
        return false
    }

    const falseNegativeTestResultInfo = (meta) => {
        // 27.	The patient decision aid includes information about the chances of having a false-negative test result.
        return false
    }

    const chancesOfDetectionWithAndWithoutTest = (meta) => {
        // 28.	The patient decision aid describes the chances the disease is detected with and without the use of the test.
        return false
    }

    return {
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
    }
}

export default criteriaQuality