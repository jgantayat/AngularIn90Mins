# AngularIn90mins
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/jgantayat/AngularIn90Mins)

This project is an Angular application built as a learning exercise to demonstrate various core concepts of the Angular framework. The application features a to-do list manager that fetches data from a public API, a simple counter, and demonstrates concepts like signals, custom directives, and pipes.

## Features

*   **Component-Based Architecture:** The application is structured with distinct components for the header, home page, to-do list, and individual to-do items.
*   **Services & Dependency Injection:** A `TodosService` is used to encapsulate the logic for fetching to-do data, which is then injected into the `TodosComponent`.
*   **HTTP Client:** Utilizes Angular's `HttpClient` to retrieve to-do items from the JSONPlaceholder API.
*   **Routing:** Implements basic routing to navigate between the Home page and the Todos page.
*   **Angular Signals:** Employs signals for modern, fine-grained state management in components like the `CounterComponent` and `TodosComponent`.
*   **Custom Directive:** Includes a custom attribute directive, `HighlightCompletedTodoDirective`, to dynamically apply styles to completed to-do items.
*   **Custom Pipe:** A `FilterTodosPipe` is used to filter the list of to-dos based on a user's search query.
*   **Two-Way Data Binding:** Demonstrates `[(ngModel)]` for filtering the to-do list in real-time.
*   **Component Communication:** Uses `@input` and `@output` properties for communication between parent and child components (`TodosComponent` and `TodosIteamsComponent`).

## Getting Started

### Prerequisites

*   Node.js and npm
*   Angular CLI (`npm install -g @angular/cli`)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/jgantayat/AngularIn90Mins.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd AngularIn90Mins
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Development Server

Run `npm start` or `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Available Scripts

*   `npm start` or `ng serve`: Starts the development server.
*   `npm run build`: Builds the project for production. The build artifacts are stored in the `dist/` directory.
*   `npm run test`: Executes the unit tests via Karma.
*   `npm run watch`: Builds the project and watches for file changes.
