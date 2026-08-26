type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";

interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const response = await fetch(
    "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json"
  );

  const data = await response.json();

  return data.map((motorcycle: Motorcycle) => ({
    ...motorcycle,
    created_at: new Date(motorcycle.created_at)
  }));
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
    <article class="motorcycle-card">
      <div class="relative">
        <img
          src="${motorcycle.image_url}"
          alt="${motorcycle.name}"
          class="motorcycle-card-image-container motorcycle-card-image"
        />

        <span class="motorcycle-card-year-badge">
          ${motorcycle.year}
        </span>
      </div>

      <div class="motorcycle-card-content">
        <div class="motorcycle-card-header">
          <div>
            <h2 class="motorcycle-card-title">
              ${motorcycle.name}
            </h2>

            <p class="motorcycle-card-manufacturer">
              ${motorcycle.manufacturer}
            </p>
          </div>

          <span class="motorcycle-card-category">
            ${motorcycle.category}
          </span>
        </div>

        <p class="motorcycle-card-description">
          ${motorcycle.description}
        </p>

        <div class="motorcycle-card-footer">
          <div>
            <p class="motorcycle-card-price">
              $${motorcycle.price.toLocaleString()}
            </p>

            <p class="motorcycle-card-engine">
              Horsepower information unavailable
            </p>
          </div>

          <button class="motorcycle-card-button">
            View Details
          </button>
        </div>
      </div>
    </article>
  `;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  constructor() {
    this.renderMotorcycles();
    this.setupFilter();
  }

  renderMotorcycles = async (): Promise<void> => {
    this.allMotorcycles = await fetchMotorcycles();

    const motorcycleGrid = document.getElementById(
      "motorcycle-grid"
    ) as HTMLDivElement;

    motorcycleGrid.innerHTML = this.allMotorcycles
      .map((motorcycle) => renderMotorcycleCard(motorcycle))
      .join("");

    this.updateResults(this.allMotorcycles.length);
  };

  private setupFilter(): void {
    const filterInput = document.getElementById(
      "name-filter-input"
    ) as HTMLInputElement;

    filterInput.addEventListener("input", () => {
      const searchText = filterInput.value.toLowerCase();

      const filteredMotorcycles = this.allMotorcycles.filter(
        (motorcycle) =>
          motorcycle.name.toLowerCase().includes(searchText)
      );

      this.renderFilteredMotorcycles(filteredMotorcycles);
    });
  }

  private renderFilteredMotorcycles(
    motorcycles: Motorcycle[]
  ): void {
    const motorcycleGrid = document.getElementById(
      "motorcycle-grid"
    ) as HTMLDivElement;

    motorcycleGrid.innerHTML = motorcycles
      .map((motorcycle) => renderMotorcycleCard(motorcycle))
      .join("");

    this.updateResults(motorcycles.length);
  }

  private updateResults(numberOfResults: number): void {
    const resultsNumber = document.getElementById(
      "results-number"
    ) as HTMLSpanElement;

    const noResults = document.getElementById(
      "no-results"
    ) as HTMLDivElement;

    resultsNumber.textContent = numberOfResults.toString();

    noResults.style.display =
      numberOfResults === 0 ? "block" : "none";
  }
}

new MotorcycleGalleryApp();