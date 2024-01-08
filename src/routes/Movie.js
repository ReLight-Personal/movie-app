import Component from "../core/component";
import movieStore, { getMovieDetails } from "../store/movie";

export default class Movie extends Component {
  async render() {
    this.el.classList.add("container", "the-movie");
    this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `;

    await getMovieDetails(history.state.id);

    const { movieInfo } = movieStore.state;
    const bigPoster = movieInfo.Poster.replace("SX300", "SX700");

    this.el.innerHTML = /* html */ `
      <div
        style="background-image:url(${bigPoster});"
        class="poster">
      </div>
      <div class="specs">
        <div class="title">
          ${movieInfo.Title}
        </div>
        <div class="labels">
          <span>${movieInfo.Released}</span>
          &nbsp;/&nbsp;
          <span>${movieInfo.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movieInfo.Country}</span>
        </div>
        <div class="plot">
          ${movieInfo.Plot}
        </div>
        <div>
          <h3>Ratings</h3>
          ${movieInfo.Ratings.map((rating) => {
            return /* html */ `<p>${rating.Source} - ${rating.Value}</p>`;
          }).join("")}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movieInfo.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movieInfo.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movieInfo.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movieInfo.Genre}</p>
        </div>
      </div>
    `;
  }
}
