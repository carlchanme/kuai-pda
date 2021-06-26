export const showsNegativePositiveOption = (data) => {
    // 1.	The patient decision aid shows the negative and positive features of options with equal detail
    // (e.g., using similar fonts, sequence, presentation of statistical information).
    return false
}

export const provideCitationOfEvidence = (data) => {
    // 2.	The patient decision aid (or associated documentation) provides citations to the evidence selected.
    return false
}

export const showPublicationDate = (data) => {
    // 3.	The patient decision aid (or associated documentation) provides a production or publication date.
    return false
}

export const showUpdatePolicy = (data) => {
    // 4.	The patient decision aid (or associated documentation) provides information about the update policy.
    return false
}

export const showLevelOfUncertainty = (data) => {
    // 5.	The patient decision aid provides information about the levels of uncertainty around event or
    // outcome probabilities (e.g., by giving a range or by using phases such as ‘‘our best estimate is . . .’’).
    return false
}

export const showFundingSource = (data) => {
    // 6.	The patient decision aid (or associated documentation) provides information about the funding source
    // used for development.
    return false
}

export const goalOfTest = (data) => {
    // 7.	The patient decision aid describes what the test is designed to measure.
    return false
}

export const describeNextStepDetected = (data) => {
    // 8.	If the test detects the condition or problem, the patient decision aid describes the next steps
    // typically taken.
    return false
}

export const describeNextStepNotDetected = (data) => {
    // 9.	The patient decision aid describes the next steps if the condition or problem is not detected.
    return false
}

export const describeConsequenceIfNoScreening = (data) => {
    // 10.	The patient decision aid has information about the consequences of detecting the condition or disease
    // that would never have caused problems if screening had not been done (lead time bias).
    return false
}