import React from 'react';

const CriteriaQuality = (data) => {
    const describeCondition = () => {
        // 1.	The patient decision aid describes the health condition or problem (treatment, procedure, or investigation)
        // for which the index decision is required
        return !!data?.objective
    }
    const describeDecision = () => {
        // 2.	The patient decision aid explicitly states the decision that needs to be considered (index decision). (options / decision)
        return false
    }

    const describeOptions = () => {
        // 3.	The patient decision aid describes the options available for the index decision
        return true
    }
    const describeOptionsPositive = () => {
        // 4.	The patient decision aid describes the positive features (benefits or advantages) of each option
        return false
    }
    const describeOptionsNegative = () => {
        // 5.	The patient decision aid describes the negative features (harms, side effects, or disadvantages)
        // of each option
        return false
    }
    const consequenceOptions = () => {
        // 6.	The patient decision aid describes what it is like to experience the consequences of the options
        // (e.g., physical, psychological, social).
        return false
    }
    return {
        describeCondition,
        describeDecision,
        describeOptions,
        describeOptionsPositive,
        describeOptionsNegative,
        consequenceOptions,
    }
}

export default CriteriaQuality