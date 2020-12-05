import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Menu type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenu = {} & typeof MenuDefaultProps;

/**
 * Defines the Menu default props.
 * @category Components
 * @example
 * Example here...
 */
const MenuDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Menu.
 * @category Components
 * @component
 * @example
 * return <Menu />
 */
const Menu = (props: TMenu) => {
  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Menu", containerKlass)}>Menu</div>;
};

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps };
