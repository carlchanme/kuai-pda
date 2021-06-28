import React from 'react';
import criteriaValidator from "../criteriaValidator";

const CriteriaQuality = (meta) => {
    const {pages} = meta
    const describeCondition = () => {
        // 1.	The patient decision aid describes the health condition or problem (treatment, procedure, or investigation)
        // for which the index decision is required

        const regex = /option[s]{0,1}/
        return pages?.some((page) => {
            // for .some, when true is returned then it will break;
            return criteriaValidator(page, regex)
        })
    }
    const describeDecision = () => {
        // 2.	The patient decision aid explicitly states the decision that needs to be considered (index decision). (options / decision)
        return false
    }
    const describeOptions = () => {
        // 3.	The patient decision aid describes the options available for the index decision
        return false
    }
    const describeOptionsPositive = () => {
        // 4.	The patient decision aid describes the positive features (benefits or advantages) of each option
        const regex = /\b([B|b]enefit|[A|a]dvantage|[P|p]ro)s{0,1}\b/
        return pages?.some((page) => {
            // for .some, when true is returned then it will break;
            return criteriaValidator(page, regex, "json")
        })
    }
    const describeOptionsNegative = () => {
        // 5.	The patient decision aid describes the negative features (harms, side effects, or disadvantages)
        // of each option
        const regex = /\b([H|h]arms|[D|d]isadvantages|[C|c]on|[S|s]ide [E|e]ffect)s{0,1}\b/
        return pages?.some((page) => {
            // for .some, when true is returned then it will break;
            return criteriaValidator(page, regex, "json")
        })
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