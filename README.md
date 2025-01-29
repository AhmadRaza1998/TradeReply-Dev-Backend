# TradeReply Development Repository

This repository is for the **Development Environment** of TradeReply, an advanced analytics suite for crypto and stock traders. Developers will use this environment to stage, test, and deploy changes locally before pushing updates to [dev.tradereply.com](https://dev.tradereply.com).

[![Visit https://dev.tradereply.com](https://img.shields.io/badge/Visit-https%3A%2F%2Fdev.tradereply.com-blue?style=for-the-badge)](https://dev.tradereply.com)

Ensure dev styling matches the deprecated frontend-only site, https://static.tradereply.com.

---

## 📘 Purpose

- Provide a structured development workflow for building and testing features.
- Allow developers to stage and review changes locally before deploying to the development server.
- Facilitate modular deployment by restructuring the repository into **frontend** and **backend** directories.

---

## 🚀 Tech Stack
- **Quick Overview**: SPA, SSR with Inertia.js + React + Laravel + MySQL + TailwindCSS + AWS
- **Frontend**: React with JSX and SCSS for building interactive user interfaces, styled with TailwindCSS and Sass for maintainable, modular CSS. Vite is used for hot module replacement (HMR) and fast asset bundling.
- **Backend**: Laravel for robust API development and server-side logic, integrated with the `laravel-vite-plugin` for seamless asset management.
- **Database**: MySQL for relational data management.
- **Build Tools**: Vite serves as the primary build tool, replacing Laravel Mix, with scripts for development (`npm run dev`), production builds (`npm run build`), and formatting (`npm run format`) powered by Prettier. ESLint ensures consistent code quality.
- **UI Libraries**: Bootstrap and React-Bootstrap for prebuilt components, with additional enhancements from React-Select, React-Datepicker, and React-Slick for advanced UI functionality.
- **Hosting**: AWS (EC2 T3 small (64-bit x86) using Apache Web Server on Ubuntu Server for compute, RDS for database, S3 for storage).
- **Validation**: Yup for schema-based form validation, often paired with React forms for robust input handling.
- **HTTP Requests**: Axios is used for API interactions, simplifying HTTP request management and error handling.

---

## 🖂️ Repository Restructuring Instructions

To align with deployment requirements, the repository must be restructured as follows:

- **Frontend**:
  - Contains all JSX, SCSS, images, fonts, and other frontend-specific files.
  - JavaScript files (`.js` and `.jsx`) related to React and other client-side functionality are stored here.
  - The `vite.config.js` file resides in the `frontend/` directory, as it manages Vite’s configuration for bundling frontend assets.
  - Built assets from Vite will be output to the `backend/public/` directory.

- **Backend**:
  - Includes all Laravel framework files, such as `app/`, `config/`, `routes/`, and `resources/` for backend logic and views.
  - Resources for views will contain `app.blade.php` in `backend/resources/views/`.
  - Any backend-specific JavaScript files required for server-side logic or direct Laravel use (e.g., API utilities) are stored in the backend and are not built by Vite.

### Steps for Restructuring

1. Create two top-level directories: `frontend/` and `backend/`.
2. Move:
   - JSX, SCSS, images, fonts, and other frontend-specific files to `frontend/`.
   - Laravel framework files, including `app/`, `config/`, `routes/`, and `resources/`, to `backend/`.
   - Place `vite.config.js` in the `frontend/` directory to manage Vite builds.
   - Ensure the `backend/public/` directory remains the output target for Vite builds.
3. Set up separate `.env` files for both `frontend/` and `backend/`:
   - The `frontend/` directory should handle Vite and frontend-related configurations.
   - The `backend/` directory should handle Laravel and server-side configurations.
4. Adjust Laravel’s `app.blade.php`:
   - Ensure it includes the `@vite` directive for frontend assets.
5. Verify imports and paths:
   - Check all frontend imports (e.g., images, fonts, and SCSS) to ensure compatibility after restructuring.
   - Ensure backend-specific scripts and assets are correctly referenced and not dependent on Vite builds.
   - Verify paths in all files reference correct locations after build.
6. Test the restructured setup:
   - Run `npm run dev` for the frontend and `php artisan serve` for the backend to ensure both parts work as expected.

---

## 📂 Examples Folder

The `examples/` directory contains files meant for reference only. These files are:
- **Not part of the development.**
- Meant to serve as templates or guides for developers for the restructure of the repo.

---

## 📜 Development Environment Setup

### Clone the Repository
```bash
git clone https://github.com/TradeReply/dev.git
cd dev
```

### Install Dependencies
1. **Frontend**:
   ```bash
   cd frontend
   npm install
   ```
2. **Backend**:
   ```bash
   cd backend
   composer install
   ```

### Set Up `.env` Files
1. Copy `.env.example` to `.env` in both `frontend/` and `backend/`:
   ```bash
   cp .env.example .env
   ```
2. Generate the Laravel application key in the backend:
   ```bash
   php artisan key:generate
   ```

### Set Up the Database
1. Configure the `.env` file in the `backend/` directory with development settings.
2. Run database migrations:
   ```bash
   php artisan migrate
   ```

### Start Development Servers
1. **Frontend** (with Vite):
   ```bash
   npm run dev
   ```
2. **Backend**:
   ```bash
   php artisan serve
   ```

---

## 🔧 Essential Development Commands

### Laravel Commands
Here are common Laravel commands developers should know:

```bash
# Clear Cache
php artisan cache:clear

# Clear Config Cache
php artisan config:clear

# Clear Route Cache
php artisan route:clear

# Clear View Cache
php artisan view:clear

# Check All Routes
php artisan route:list

# Run Unit Tests
php artisan test

# Rollback Migrations
php artisan migrate:rollback
```

### Frontend Commands
Common commands for working with Vite and npm:

```bash
# Start Vite Development Server
npm run dev

# Build Assets for Production (if needed for testing builds)
npm run build

# Lint and Fix SCSS or JS (if configured)
npm run lint
```

### Debugging and Logs
- Enable **debugging** in `.env`:
  ```dotenv
  APP_DEBUG=true
  ```
- View logs directly from the terminal:
  ```bash
  tail -f storage/logs/laravel.log
  ```

### Database Seeding
If you need sample data for testing:

```bash
# Run Database Seeders
php artisan db:seed

# Reset and Re-seed the Database
php artisan migrate:fresh --seed
```

### Git Workflow
Follow these practices for consistency:

```bash
# Create a new branch
git checkout -b feature/<feature-name>

# Pull the latest changes from dev branch
git pull origin dev

# Commit changes
git commit -m "Add new feature"
```

---

## 🌐 API and Webhook Testing Tools
To test APIs or webhooks during development, you can use tools like:

### API Testing
1. **Postman**: Use Postman to test Laravel API endpoints, simulate frontend-to-backend requests, and validate authentication flows.
2. **Insomnia**: A lightweight alternative to Postman for rapid API testing.
3. **VS Code REST Client**: Integrated solution for writing and testing API requests directly in `.http` or `.rest` files.

### Webhook Testing
1. **Ngrok**: Expose your local Laravel server to the internet with a public URL for webhook testing.
2. **Expose**: A self-hosted alternative to ngrok for persistent and private tunnels.
3. **RequestBin**: Temporarily capture and inspect webhook payloads from external services.

---

## 🔗 References

- **Laravel Documentation**: Follow best practices and guidelines provided in the [Laravel Official Documentation](https://laravel.com/docs).
- **SCSS**: Use SCSS for styling to maintain modular and reusable stylesheets.
- **Vite**: Configure Vite to build frontend assets and output them into the `backend/public/` directory.

---

## ⚙️ Collaboration Guidelines

- Use **GitHub Issues** to track bugs and feature requests.
- Submit **pull requests** for code reviews before merging into the main branch.
- Ensure proper documentation of all new features or changes.
- Always use comments to explain complex logic or calculations.
- Maintain consistent indentation and formatting.
- Follow naming conventions for variables, functions, and classes.
- Write modular, reusable code.

---

## 📄 File Naming Conventions

To ensure consistency and optimize for SEO, all file names must adhere to the following guidelines:

- **Lowercase Only**: All file names should be written in lowercase letters.
- **Prefix with "tradereply"**: Every file name must start with tradereply for branding and organization.
- **Use Dashes**: Use dashes (-) to separate words in file names. Avoid underscores (_) unless explicitly required by a system.
- **Descriptive Naming**: File names should be clear and descriptive to reflect their purpose.
- Example:
- Correct: tradereply-dashboard-icon.png
- Incorrect: TradeReply_dashboard_icon.png
- By following these conventions, we ensure a consistent, professional file structure across the project.

## ☁️ AWS Resource Naming

To ensure clarity and consistency across AWS resources, follow these naming conventions:

- **Name**: Use descriptive resource names (e.g., `dev-laravel-ec2`, `prod-react-s3`).
- **Environment**: Specify `Dev`, `Prod`, or `All` to indicate the target environment.
- **Purpose**: Include the resource's specific purpose (e.g., `Frontend`, `Backend`).
- **Application**: Always set to `TradeReply`.
- **Owner**: Include the responsible developer or team name.

---

## 🔒 Security Guidelines

- Do not commit sensitive information, such as credentials or API keys.
- Use `.env` files for all environment-specific configurations.
- Follow AWS security policies for deploying frontend and backend services.

---

© 2025 TradeReply LLC. All rights reserved.

Unauthorized copying, modification, or distribution of this software and its content is strictly prohibited without prior written permission from TradeReply LLC.
