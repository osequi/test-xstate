import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Template type.
 * @category Components
 * @example
 * Example here...
 */
export type TTemplate = {} & typeof TemplateDefaultProps;

/**
 * Defines the Template default props.
 * @category Components
 * @example
 * Example here...
 */
const TemplateDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Template.
 * @category Components
 * @component
 * @example
 * return <Template />
 */
const Template = (props: TTemplate) => {
  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Template", containerKlass)}>Template</div>;
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
