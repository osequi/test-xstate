import React from "react";
import Link from "next/link";

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
 * Displays the Home.
 * @category Components
 * @component
 * @example
 * return <Home />
 */
const Home = (props: THome) => {
  return (
    <div>
      <h3>Home</h3>
      <Link href="/features">Features</Link>
    </div>
  );
};

Home.defaultProps = HomeDefaultProps;

export default Home;
export { HomeDefaultProps };
