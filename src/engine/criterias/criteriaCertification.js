const criteriaCertification = (meta) => {
    const showsNegativePositiveOption = () => {
        // 1.	The patient decision aid shows the negative and positive features of options with equal detail
        // (e.g., using similar fonts, sequence, presentation of statistical information).
        return false
    }

    const provideCitationOfEvidence = () => {
        // 2.	The patient decision aid (or associated documentation) provides citations to the evidence selected.
        return false
    }

    const showPublicationDate = () => {
        console.log({path: "showPublicationDate", meta})
        // 3.	The patient decision aid (or associated documentation) provides a production or publication date.
        return !!meta.updatedDate
    }

    const showUpdatePolicy = () => {
        // 4.	The patient decision aid (or associated documentation) provides information about the update policy.
        return !!meta.updatedDate
    }

    const showLevelOfUncertainty = () => {
        // 5.	The patient decision aid provides information about the levels of uncertainty around event or
        // outcome probabilities (e.g., by giving a range or by using phases such as ‘‘our best estimate is . . .’’).
        return false
    }

    const showFundingSource = () => {
        // 6.	The patient decision aid (or associated documentation) provides information about the funding source
        // used for development.
        return false
    }

    const goalOfTest = () => {
        // 7.	The patient decision aid describes what the test is designed to measure.
        return false
    }

    const describeNextStepDetected = () => {
        // 8.	If the test detects the condition or problem, the patient decision aid describes the next steps
        // typically taken.
        return false
    }

    const describeNextStepNotDetected = () => {
        // 9.	The patient decision aid describes the next steps if the condition or problem is not detected.
        return false
    }

    const describeConsequenceIfNoScreening = () => {
        // 10.	The patient decision aid has information about the consequences of detecting the condition or disease
        // that would never have caused problems if screening had not been done (lead time bias).
        return false
    }

    return {
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
    }
}

export default criteriaCertification