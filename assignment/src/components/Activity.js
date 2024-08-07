import "../App.css";
function Activity() {
  return (
    <div className="activity dropdown">
      <h3>
        Activity
        <span className="button">
          <button
            class="btn btn-secondary  dropdown-toggle button"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Weekly
          </button>
        </span>
      </h3>
      <div class="participation-graph">
        <canvas
          class="bars"
          data-color-all="#F5F5F5"
          data-color-owner="#F5F5F5"
          data-source="/mxcl/homebrew/graphs/owner_participation"
          height="80"
          width="640"
        ></canvas>
      </div>
    </div>
  );
}

export default Activity;
