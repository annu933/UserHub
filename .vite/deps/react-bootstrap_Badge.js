"use client";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-523E5LGA.js";
import {
  require_react
} from "./chunk-JBG67EE7.js";
import {
  __toESM
} from "./chunk-UV5CTPV7.js";

// node_modules/react-bootstrap/esm/Badge.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Badge = React.forwardRef(({
  bsPrefix,
  bg = "primary",
  pill = false,
  text,
  className,
  as: Component = "span",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "badge");
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames.default)(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = "Badge";
var Badge_default = Badge;
export {
  Badge_default as default
};
//# sourceMappingURL=react-bootstrap_Badge.js.map
