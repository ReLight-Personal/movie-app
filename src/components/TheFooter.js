import Component from "../core/component";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    const { github, repository } = aboutStore.state;
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          ReLight-Personal
        </a>
      </div>
      <div>
        <span>
          Project Create By. Re Light
        </span>
        <span>
          At. 2024.01.09.
        </span>
      </div>
    `;
  }
}
