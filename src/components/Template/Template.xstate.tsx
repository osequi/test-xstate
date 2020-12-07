import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

/**
 * Imports other types, components and hooks.
 */
import { Menu, menuMachine } from "../Menu";
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
  const [state, send] = useMachine(menuMachine);

  /**
   * Checks if homepage is the current route.
   */
  const router = useRouter();
  const route = router?.route;
  const isHomePage = route === "/";

  /**
   * Checks if the device is in portrait mode.
   */
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  /**
   * Updates the `page` typestate on route change.
   */
  useEffect(() => {
    isHomePage ? send("HOMEPAGE") : send("NONHOMEPAGE");
  }, [isHomePage]);

  /**
   * Updates the `deviceOrientation` typestate on device rotation.
   */
  useEffect(() => {
    isPortrait ? send("PORTRAIT") : send("LANDSCAPE");
  }, [isPortrait]);

  return (
    <>
      <Menu state={state} />
      <Content>{children}</Content>

      <hr />
      <p>Logs:</p>
      <ul>
        <li>{`isHomePage: ${isHomePage}`}</li>
        <li>{`isPortrait: ${isPortrait}`}</li>
      </ul>

      <hr />
      <p>How it works:</p>
      <ul>
        <li>On the home page the menu is not displayed.</li>
        <li>On the features page the menu is displayed:</li>
        <ul>
          <li>As `default` when the device is in landscape mode.</li>
          <li>As `link with icon` when the device is in portrait mode.</li>
        </ul>
      </ul>
    </>
  );
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
