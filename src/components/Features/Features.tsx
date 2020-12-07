import React from "react";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Features type.
 * @category Components
 * @example
 * Example here...
 */
export type TFeatures = {} & typeof FeaturesDefaultProps;

/**
 * Defines the Features default props.
 * @category Components
 * @example
 * Example here...
 */
const FeaturesDefaultProps = {};

/**
 * Displays the Features.
 * @category Components
 * @component
 * @example
 * return <Features />
 */
const Features = (props: TFeatures) => {
  return <h3>Features</h3>;
};

Features.defaultProps = FeaturesDefaultProps;

export default Features;
export { FeaturesDefaultProps };
