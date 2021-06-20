import React from 'react';

export const naturalCourseOfCondition = (meta) => {
    // The decision aid describes what happens in the natural course of the condition (health or other)
    // if no action is taken.
    return false
}

export const informationAboutProcedures = (meta) => {
    // The decision aid has information about the procedures involved (e.g. what is done before, during,
    // and after the health care option).
    return false
}

export const informationAboutOutcomes = (meta) => {
    // The information about outcomes of options (positive and negative) includes the chances they may happen.
    return false
}

export const showProbabilitiesSpecificTime = (meta) => {
    // The decision aid presents probabilities using event rates in a defined group of people for a specified time.
    return false
}

export const showProbabilitiesTimePeriod = (meta) => {
    // The decision aid compares probabilities of options over the same period of time.
    return false
}

export const showDiagramsOfOptions = (meta) => {
    // The decision aid uses the same scales in diagrams comparing options.
    return false
}

export const previousUserFeedback = (meta) => {
    // Users (people who previously faced the decision) were asked what they need to prepare them to discuss a specific decision.
    return false
}

export const previousUserReviewed = (meta) => {
    // The decision aid was reviewed by people who previously faced the decision who were not involved in its development and field testing.
    return false
}

export const testedByPreviousUser = (meta) => {
    // People who were facing the decision field tested the decision aid.
    return false
}

export const testedByPreviousUsersAccepted = (meta) => {
    // Field testing showed that the decision aid was acceptable to users (the general public & practitioners).
    return false
}

export const balanceInformation = (meta) => {
    // Field testing showed that people who were undecided felt that the information was presented in a balanced way.
    return false
}

export const helpedUser = (meta) => {
    // There is evidence that the decision aid (or one based on the same template) helps people know about the available options and their features.
    return false
}

export const improvedMatchWithOptions = (meta) => {
    // There is evidence that the decision aid (or one based on the same template) improves the match between the features that matter most to the informed person and the option that is chosen.
    return false
}