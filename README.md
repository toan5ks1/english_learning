# Tymex Interview Frontend - Toan5ks1

## Overview

This project is a frontend application built using **Next.js**, **React**, and **TypeScript**. It implements a dynamic and responsive UI that fetches data from an API, provides search and filtering functionality, supports pagination (load more), and auto-refreshes data every 60 seconds. The design adheres to a clean and user-friendly interface with a focus on performance and maintainability.

## Features

### **Must Have**

#### **Functional**

- ✅ UI matches the provided **Figma design**.
- ✅ Fully **responsive** across desktop, tablet, and mobile devices.
- ✅ Fetches **user data from an API**.
- ✅ Supports **search and filtering** based on one criterion.
- ✅ Implements **pagination** ("Load More" feature).
- ✅ Handles **loading states, empty data, and exceptions**.
- ✅ **Auto-refreshes** data every 60 seconds.

#### **Non-Functional**

- ✅ Uses **TypeScript** for improved type safety.
- ✅ Applies **code formatting and linting**:
  - Prettier for code formatting.
  - ESLint for linting.
- ✅ Follows **modular and well-organized** code structure.
- ✅ Implements **unit tests with >40% test coverage**.
- ✅ Hosted on **Vercel** with the repository name:
  ```
  tymex-interview-frontend-toan5ks1
  ```

### **Nice To Have**

#### **Functional**

- ✅ **Basic animations** (e.g., page transitions, fade-in/out components).
- ✅ **Multi-criteria search support (Multi Category/Tier/Theme)**.
- ✅ **Auto-trigger search on criteria change**.

#### **Non-Functional**

- ✅ Implements **custom React hooks** for better reusability (useProducts).

- ✅ Well-commented code for maintainability.

- ✅ Environment configurations are stored in `.env` file.

- ✅ Implements **lazy loading and skeleton loading** for performance optimization.

- ✅ Achieves **unit test coverage >80%**.
  [Coverage](/public/test-coverage.png)

- ✅ Includes \*\*component test \*\*

- ✅ Implements **debounce pattern** for search optimization.

- ✅ Follows a well-defined **Git commit message format**.

- ✅ Deployed with a **working online demo**.

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI Library:** Shadcn UI
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Testing:** Jest & React Testing Library
- **Deployment:** Vercel

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/toan5ks1/tymex-interview-frontend-toan5ks1.git
   cd tymex-interview-frontend-toan5ks1
   ```
2. Install dependencies:
   ```sh
   pnpm i
   ```
3. Start the development server:
   ```sh
   pnpm dev
   ```
4. Run tests:
   ```sh
   pnpm test
   ```
5. Build for production:
   ```sh
   pnpm run build
   ```

## Testing & Code Quality

- **Linting:**
  ```sh
  pnpm lint
  ```
- **Code Formatting:**
  ```sh
  pnpm format
  ```
- **Run Tests with Coverage:**
  ```sh
  npm run test:coverage
  ```

## Deployment

The application is deployed on **Vercel**. To deploy manually, run:

```sh
vercel deploy
```

## Contact

For any questions or further clarifications, feel free to reach out.
