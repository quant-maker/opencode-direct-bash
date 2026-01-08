# Contributing to opencode-direct-bash

Thank you for your interest in contributing to opencode-direct-bash! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/opencode-direct-bash.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit your changes: `git commit -m "Add your feature"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test locally by copying to OpenCode config
cp src/index.ts ~/.config/opencode/plugin/direct-bash.ts
```

## Code Style

- Use TypeScript for all code
- Follow existing code formatting
- Add comments for complex logic
- Use meaningful variable and function names

## Testing

Before submitting a PR:

1. Build the project without errors: `npm run build`
2. Test the plugin in OpenCode:
   - Copy the built file to your OpenCode plugin directory
   - Restart OpenCode
   - Test with various commands like `!ls`, `!git status`, etc.
3. Test error cases (invalid commands, etc.)

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Include a clear description of changes
- Update README.md if adding new features
- Ensure all tests pass
- Follow the existing code style

## Reporting Issues

When reporting issues, please include:

- OpenCode version
- Plugin version
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Error messages (if any)

## Feature Requests

Feature requests are welcome! Please:

- Check if the feature already exists
- Provide a clear description of the feature
- Explain the use case
- Consider submitting a PR to implement it

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## Questions?

Feel free to open an issue for any questions about contributing.

Thank you for contributing!
