# 2DOO – Desktop ToDo Application with Automated Testing

**2DOO** is a lightweight cross-platform desktop ToDo application built with **React + Electron**, enhanced with **end-to-end automated testing** using **Pytest** and **Playwright**, including HTML reports and step-by-step screenshots.

# 1. Overview

2DOO is designed for simplicity, persistence, and reliability.

The application:

* Runs as a native desktop app via **Electron**
* Persists tasks using **localStorage**
* Includes automated end-to-end tests
* Generates HTML reports with screenshots
* Separates application logic from testing logic for maintainability and scalability

# 2. Features

## 2.1 Desktop Application

* Add tasks
* Mark tasks as completed
* Delete tasks
* Persistent storage via **localStorage**
* Fixed-size desktop window
* Minimal and focused UI

## 2.2 Automated Testing

* End-to-end scenarios with **Playwright**
* Structured **Pytest** test suite
* HTML reports using **pytest-html**
* Screenshot capture for each test step
* Independent execution environment

# 3. Project Structure

```
2DO/
│
├── 2doo/                     # React + Electron application
│   ├── src/                  # React source files
│   ├── public/               # Static assets & test results
│   ├── main.js               # Electron main process
│   └── package.json
│
├── 2do_tests/                # Automated test suite
│   ├── test_todo.py
│   ├── pytest.ini
│   └── requirements.txt
│
└── dist/                     # Packaged application output
```

# 4. Tech Stack

**Frontend & Desktop:** React, Electron, JavaScript
**Testing:** Python, Pytest, Playwright, pytest-html
**Packaging:** electron-builder, NSIS (Windows installer)

# 5. Installation

## 5.1 Clone the Repository

```bash
git clone https://github.com/BTAyoub/To_Do-list.git
cd To_Do-list/2doo
```

## 5.2 Install Dependencies

```bash
npm install
```

## 5.3 Start the Application

```bash
npm start
```

* Starts the React development server
* Executes automated tests if configured
* Tests can also be run separately

# 6. Running Tests

```bash
cd ../2do_tests
pip install -r requirements.txt
pytest
```

**Generate HTML report:**

```bash
pytest --html=report.html
```

**Outputs:**

* `2doo/public/test-results/report.html`
* `2doo/public/test-results/screenshots/`

# 7. Packaging the Desktop Application

```bash
npm run package
```

* Packages the app as a Windows executable using NSIS
* Installer will be generated inside `dist/`
* Supports custom icons

# 8. Architecture Principles

* Separation of concerns between app and tests
* Modular frontend components
* Reproducible and maintainable tests
* Clear reporting with screenshots

# 9. Future Improvements

* CI/CD pipeline integration (GitHub Actions or similar)
* Extended cross-platform packaging (Linux, macOS)
* Increased automated test coverage
* Performance monitoring and enhancements

# 10. License

Developed for educational and demonstration purposes.
