import React from "react";
import { useMediaQuery } from "react-responsive";

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
  const handleMediaQueryChange = (matches) => {
    console.log("handleMediaQueryChange:", matches);
  };

  const isPortrait = useMediaQuery(
    { query: "(orientation: portrait)" },
    undefined,
    handleMediaQueryChange
  );

  const text = isPortrait ? "portrait" : "landscape";

  return <>{text}</>;
};

Home.defaultProps = HomeDefaultProps;

export default Home;
export { HomeDefaultProps };
