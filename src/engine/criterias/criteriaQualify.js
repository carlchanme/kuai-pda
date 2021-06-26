import React from 'react';

export const describeCondition = (data) => {
    // 1.	The patient decision aid describes the health condition or problem (treatment, procedure, or investigation)
    // for which the index decision is required
    return !!data?.objective
}
export const describeDecision = (data) => {
    // 2.	The patient decision aid explicitly states the decision that needs to be considered (index decision).
    return false
}

export const describeOptions = (data) => {
    // 3.	The patient decision aid describes the options available for the index decision
    return false
}
export const describeOptionsPositive = (data) => {
    // 4.	The patient decision aid describes the positive features (benefits or advantages) of each option
    return false
}
export const describeOptionsNegative = (data) => {
    // 5.	The patient decision aid describes the negative features (harms, side effects, or disadvantages)
    // of each option
    return false
}
export const consequenceOptions = (data) => {
    // 6.	The patient decision aid describes what it is like to experience the consequences of the options
    // (e.g., physical, psychological, social).
    return false
}