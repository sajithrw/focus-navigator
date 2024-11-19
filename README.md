# Focus Navigator
Focus Navigator is a lightweight, accessible utility that enhances keyboard navigation within a container. It ensures focus stays within a defined area (focus trap) and supports seamless keyboard interactions, making your front-end applications more accessible and user-friendly.

## Features
🔒 Focus Trap: Keeps keyboard focus within a specific container.

⌨️ Keyboard Navigation: Supports Tab and Shift+Tab navigation for cycling through focusable elements.

🌟 Accessibility-First: Built to improve web accessibility (A11Y) compliance.

🚀 Lightweight: Minimal dependencies for easy integration.

## Installation
To install Focus Navigator, use npm:

    npm install focus-navigator

Or, if you're using Yarn:

    yarn add focus-navigator

## Usage
Here’s how you can use Focus Navigator in your project:

### Basic Example

    import { focusNavigator } from 'focus-navigator';

    // Select the container you want to trap focus within
    const container = document.getElementById('container');

    // Initialize Focus Navigator
    focusNavigator(container);

### HTML Example

    <div id="container">
        <button>Button 1</button>
        <button>Button 2</button>
        <a href="#">Link</a>
    </div>

## API Reference

    focusNavigator(container: HTMLElement): void

Initializes the focus navigator within a container.

### Parameters
* container (HTMLElement): The DOM element that acts as the container for focus trapping.

### Returns
* void

### Throws
* An error if no valid container is provided.

## Accessibility Notes

Focus Navigator uses best practices to ensure accessible keyboard navigation. However, it’s important to:

1. Ensure all focusable elements have a proper tabindex attribute.
2. Use semantic HTML for better compatibility.

## Development
### Contributing
Contributions are welcome! If you’d like to improve Focus Navigator, feel free to:

1. Fork this repository.
2. Submit a pull request with your changes.

### Development Scripts
* <b>Build</b>: Compile TypeScript to JavaScript:
    
        npm run build

* <b>Test</b>: Run unit tests:

        npm test

## Changelog
See the [CHANGELOG.md](CHANGELOG.md) file for details on changes in each version.

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Contact
If you have any questions or feature requests, feel free to create an issue on the GitHub repository or contact the maintainer at sajithwarnasooriya@gmail.com.