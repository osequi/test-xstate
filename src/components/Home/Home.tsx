import React from "react";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Home type.
 * @category Components
 * @example
 * Example here...
 */
export type THome = {} & typeof HomeDefaultProps;

/**
 * Defines the Home default props.
 * @category Components
 * @example
 * Example here...
 */
const HomeDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Home.
 * @category Components
 * @component
 * @example
 * return <Home />
 */
const Home = (props: THome) => {
  return "Home";
};

Home.defaultProps = HomeDefaultProps;

export default Home;
export { HomeDefaultProps };
