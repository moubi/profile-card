import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedReaction from "unexpected-reaction";
import unexpectedSinon from "unexpected-sinon";

const expect = unexpected
  .clone()
  .use(unexpectedDom)
  .use(unexpectedReaction)
  .use(unexpectedSinon);

export { Ignore, simulate, act, mount } from "react-dom-testing";

export default expect;
