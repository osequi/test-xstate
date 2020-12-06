import React from "react";
import { Machine } from "xstate";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Menu type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenu = {
  items: string[];
  state: any;
} & typeof MenuDefaultProps;

/**
 * Defines the Menu default props.
 * @category Components
 * @example
 * Example here...
 */
const MenuDefaultProps = {
  items: null,
  state: null,
};

/**
 * Defines the context for the menu state.
 * Not really used here. It was borrowed from Typestates, the future syntax of XState.
 * @see https://xstate.js.org/docs/guides/typescript.html#using-typescript
 */
interface MenuStateContext {
  /**
   * On homepage the menu is not displayed.
   */
  page?: "Home" | "NonHome";
  /**
   * On landscape the full menu is displayed. On portrait only the active menu title with a hamburger icon.
   * @type {String}
   */
  deviceOrientation: "Portrait" | "Landscape";
}

/**
 * Defines the menu state schema.
 */
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

/**
 * Defines the events changing the menu state.
 */
type MenuStateChangingEvents =
  | { type: "HOMEPAGE" }
  | { type: "NONHOMEPAGE" }
  | { type: "PORTRAIT" }
  | { type: "LANDSCAPE" };

/**
 * Defines the menu state machine.
 * @see https://xstate.js.org/viz/?gist=48b26a64f6ce9677bec1037cfec4b487
 */
const menuMachine = Machine<
  MenuStateContext,
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
 * Displays the Menu.
 * @category Components
 * @component
 * @example
 * return <Menu />
 */
const Menu = (props: TMenu) => {
  const { state } = props;
  return <div>Menu: {JSON.stringify(state?.value)}</div>;
};

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps, menuMachine };
