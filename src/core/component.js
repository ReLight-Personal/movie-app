// Component
export default class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }

  // 화면 렌더링 - 여기서 구현은 X
  render() {
    // ...
  }
}
