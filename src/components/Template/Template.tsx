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

interface MenuStateSchema {
  states: {
    unknown: {};
    hidden: {};
    displayed: {
      states: {
        default: {};
        titleWithIcon: {};
      };
    };
  };
}

type MenuStateChangingEvents =
  | { type: "HOMEPAGE" }
  | { type: "NONHOMEPAGE" }
  | { type: "PORTRAIT" }
  | { type: "LANDSCAPE" };

interface MenuContext {}

const menuMachine = Machine<
  MenuContext,
  MenuStateSchema,
  MenuStateChangingEvents
>({
  key: "menu",
  initial: "unknown",
  states: {
    unknown: {
      on: { HOMEPAGE: "hidden", NONHOMEPAGE: "displayed" },
    },
    hidden: {
      on: { NONHOMEPAGE: "displayed" },
    },
    displayed: {
      on: {
        HOMEPAGE: "hidden",
      },
      initial: "default",
      states: {
        default: {
          on: { PORTRAIT: "titleWithIcon" },
        },
        titleWithIcon: {
          on: { LANDSCAPE: "default" },
        },
      },
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
    console.log("Route changed:", route);
    isHomePage ? send("HOMEPAGE") : send("NONHOMEPAGE");
  }, [isHomePage]);

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  useEffect(() => {
    console.log("Device changed:", isPortrait);
    isPortrait ? send("PORTRAIT") : send("LANDSCAPE");
  }, [isPortrait]);

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
