import React, { ReactNode } from "react";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Content type.
 * @category Components
 * @example
 * Example here...
 */
export type TContent = {
  children: ReactNode;
} & typeof ContentDefaultProps;

/**
 * Defines the Content default props.
 * @category Components
 * @example
 * Example here...
 */
const ContentDefaultProps = {};

/**
 * Displays the Content.
 * @category Components
 * @component
 * @example
 * return <Content />
 */
const Content = (props: TContent) => {
  const { children } = props;
  return <>{children}</>;
};

Content.defaultProps = ContentDefaultProps;

export default Content;
export { ContentDefaultProps };
