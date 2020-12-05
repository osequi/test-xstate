import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

/**
 * Imports other types, components and hooks.
 */
import { Menu } from "../Menu";
import { Content } from "../Content";

/**
 * Defines the Template type.
 * @category Components
 * @example
 * Example here...
 */
export type TTemplate = {
  children: ReactNode;
} & typeof TemplateDefaultProps;

/**
 * Defines the Template default props.
 * @category Components
 * @example
 * Example here...
 */
const TemplateDefaultProps = {};

/**
 * Displays the Template.
 * @category Components
 * @component
 * @example
 * return <Template />
 */
const Template = (props: TTemplate) => {
  const { children } = props;
  /**
   * Checks if homepage is the current route.
   */
  const router = useRouter();
  const route = router?.route;
  const isHomePage = route === "/";

  const handleMediaQueryChange = (matches) => {
    console.log("handleMediaQueryChange:", matches);
  };

  const isPortrait = useMediaQuery(
    { query: "(orientation: portrait)" },
    undefined,
    handleMediaQueryChange
  );

  return (
    <>
      <Menu />
      <Content>{children}</Content>
    </>
  );
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
