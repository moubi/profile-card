import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedReaction from "unexpected-reaction";
import ReactDom from "react-dom";
import unexpectedSinon from "unexpected-sinon";

const expect = unexpected
  .clone()
  .use(unexpectedDom)
  .use(unexpectedReaction)
  .use(unexpectedSinon);

export function getInstance(reactElement, tagName = "div") {
  const div = document.createElement(tagName);
  const element = ReactDom.render(reactElement, div);

  const result = {
    instance: element,
    subject: div.firstChild
  };

  return result;
}

export { Ignore, simulate, act, mount } from "react-dom-testing";

export default expect;
