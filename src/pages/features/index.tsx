import { Features } from "../../components/Features";

/**
 * Defines the Features Page type.
 * @category Components
 * @example
 * xxx
 */
export type TFeaturesPage = {
  title: string;
} & typeof FeaturesPageDefaultProps;

/**
 * Defines the Features Page default props.
 * @category Components
 * @example
 * xxx
 */
const FeaturesPageDefaultProps = {
  title: "Features",
};

const FeaturesPage = () => {
  return <Features />;
};

FeaturesPage.defaultProps = FeaturesPageDefaultProps;
export default FeaturesPage;
