# Conversational Banking App

## Overview

Welcome to the Conversational Banking App! This project integrates a conversational Angular application with a Rasa-based chatbot. The chatbot is designed to assist users with queries related to opening an online bank account, and it uses intent-based interactions to provide accurate and relevant responses.


<img src="./screen-capture.gif" alt="Conversational Banking App Demo" width="300"/>
## Features

- **Angular Frontend:** A modern and responsive web interface built with Angular.
- **Rasa Chatbot:** An intent-based chatbot that handles various queries related to online bank accounts.
- **Intents Supported:**
  - **Company Information:** Details about BFI Groupe, its values, services, and contact information.
  - **Chatbot Details:** Information about the chatbot's capabilities, features, and purpose.
  - **Bank Account Queries:** Assistance with opening a bank account, requirements, features, security, restrictions, and more.
  - **User Interactions:** Handling greetings, farewells, thanks, and requests for help.

## Getting Started

### Prerequisites

- Node.js (for Angular)
- Angular CLI
- Python 3.x
- Rasa (version 3.1)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/conversational-banking-app.git
   cd conversational-banking-app
2. **install packages and run the app:**

   ```bash
   npm i
   ng serve
3. **Set Up Conda Environment for Rasa:**

   ```bash
   conda create -n rasa-env python=3.8
   conda activate rasa-env
4. **install rasa:**

   ```bash
   pip install rasa
5. **train rasa model:**

   ```bash
   rasa train
6. **run rasa shell or run rasa on port 5005:**

   ```bash
   rasa shell
   #or
   rasa run --port 5005




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
