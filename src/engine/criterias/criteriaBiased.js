import React from 'react';

export const comparePositiveNegativeOptions = (meta) => {
    //️The decision aid makes it possible to compare the positive and negative
    // features of the available options.
    return true
}
export const showsNegativePositiveOption = (meta) => {
    // The decision aid shows the negative and positive features of the
    // options with equal detail.
    return true
}

export const compareProbabilities = (meta) => {
    // The decision aid compares probabilities (e.g. chance of a disease,
    // benefit, harm, or side effect) of options using the same denominator.
    return true
}

export const reportFunding = (meta) => {
    // The decision aid (or available technical documents) reports funding
    // sources for development.
    return true
}

export const authorBiased = (meta) => {
    // The decision aid reports whether authors of the decision aid or their
    // affiliations stand to gain or lose by choices people make after using the decision aid.
    return false
}

export const authorDeveloperCredentials = (meta) => {
    // The decision aid includes authors/developers' credentials or qualifications.
    return false
}

export const lastUpdated = (meta) => {
    // The decision aid reports the date when it was last updated.
    return true
}

export const readabilityLevel = (meta) => {
    // The decision aid (or available technical document) reports readability levels.
    return true
}

export const reference = (meta) => {
    // The decision aid provides references to scientific evidence used.
    return false
}