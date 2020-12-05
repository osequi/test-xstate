import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

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

const menuMachine = Machine({
  id: "menu",
  initial: "default",
  states: {
    default: {
      on: { PORTRAIT: "titleWithIcon", HOMEPAGE: "hidden" },
    },
    titleWithIcon: {
      on: { LANDSCAPE: "default" },
    },
    hidden: {
      on: { NONHOMEPAGE: "default" },
    },
  },
});

/**
 * Displays the Template.
 * @category Components
 * @component
 * @example
 * return <Template />
 */
const Template = (props: TTemplate) => {
  const { children } = props;
  const [state, send] = useMachine(menuMachine);

  /**
   * Checks if homepage is the current route.
   */
  const router = useRouter();
  const route = router?.route;
  const isHomePage = route === "/";

  useEffect(() => {
    isHomePage ? send("HOMEPAGE") : send("NONHOMEPAGE");
  }, [isHomePage]);

  const handleMediaQueryChange = (matches) => {
    console.log("handleMediaQueryChange:", matches);
    matches ? send("PORTRAIT") : send("LANDSCAPE");
  };

  const isPortrait = useMediaQuery(
    { query: "(orientation: portrait)" },
    undefined,
    handleMediaQueryChange
  );

  return (
    <>
      <ul>
        <li>{`isHomePage: ${isHomePage}`}</li>
        <li>{`isPortrait: ${isPortrait}`}</li>
      </ul>
      <Menu state={state} />
      <Content>{children}</Content>
    </>
  );
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
