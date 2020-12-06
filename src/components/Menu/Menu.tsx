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
  state: "initial",
};

/**
 * Defines the menu typestate
 * @see https://xstate.js.org/docs/guides/typescript.html#typestates
 */
interface MenuStateContext {
  page?: "Home" | "NotHome";
  deviceOrientation?: "Portrait" | "Landscape";
}

type MenuState =
  | {
      value: "idle";
      context: MenuStateContext & {
        page: undefined;
        deviceOrientation: undefined;
      };
    }
  | {
      value: "hidden";
      context: MenuStateContext & {
        page: "Home";
        deviceOrientation: undefined;
      };
    }
  | {
      value: "visible";
      context: MenuStateContext & {
        page: "NotHome";
        deviceOrientation: "Landscape";
      };
    }
  | {
      value: "titleWithIcon";
      context: MenuStateContext & {
        page: "NotHome";
        deviceOrientation: "Portrait";
      };
    };

type MenuStateChangingEvents =
  | { type: "HOMEPAGE" }
  | { type: "NONHOMEPAGE" }
  | { type: "PORTRAIT" }
  | { type: "LANDSCAPE" };

const menuMachine = Machine<
  MenuStateContext,
  MenuState,
  MenuStateChangingEvents
>({
  key: "menu",
  states: {
    idle: {
      on: { HOMEPAGE: "hidden", NONHOMEPAGE: "visible" },
    },
    hidden: {
      on: { NONHOMEPAGE: "visible" },
    },
    visible: {
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
