import React from 'react';

export const describeCondition = (meta) => !!meta?.objective
export const describeDecision = (meta) => true
export const identifyAudience = (meta) => !!meta?.audience
export const listOptions = (meta) => true
export const negativeOptions = (meta) => true
export const positiveOptions = (meta) => true
export const clarifyValueOfOptions = () => {
    //ask people to think about which positive and negative features of the options matter most to them
    //describing each option to help patients imagine the physical, social, and/or psychological effect.
    return true
}