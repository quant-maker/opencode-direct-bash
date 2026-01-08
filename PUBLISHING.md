# Publishing Guide for opencode-direct-bash

This guide explains how to publish the plugin to npm so other users can easily install it.

## Prerequisites

1. **npm account**: Create one at [npmjs.com](https://www.npmjs.com/signup)
2. **npm CLI**: Ensure npm is installed and up to date
3. **Git repository**: Host your code on GitHub (or similar)

## Step 1: Prepare Your Package

### Update package.json

Replace placeholder information in `package.json`:

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/opencode-direct-bash.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/opencode-direct-bash/issues"
  },
  "homepage": "https://github.com/yourusername/opencode-direct-bash#readme"
}
```

### Update README.md

Replace the GitHub links in README.md with your actual repository URL.

## Step 2: Set Up Git Repository

```bash
cd opencode-direct-bash

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: opencode-direct-bash plugin"

# Add remote (replace with your GitHub repo)
git remote add origin https://github.com/yourusername/opencode-direct-bash.git

# Push to GitHub
git push -u origin main
```

## Step 3: Build the Package

```bash
# Install dependencies
npm install

# Build TypeScript to JavaScript
npm run build

# Verify dist/ directory is created
ls dist/
```

You should see:
- `dist/index.js`
- `dist/index.d.ts`
- `dist/index.d.ts.map`
- `dist/index.js.map`

## Step 4: Test the Package Locally

Before publishing, test the package:

```bash
# Create a test link
npm link

# In another directory, test the link
cd /tmp
mkdir test-opencode-plugin
cd test-opencode-plugin
npm link opencode-direct-bash
```

Or test by copying to OpenCode:

```bash
cp src/index.ts ~/.config/opencode/plugin/direct-bash.ts
# Restart OpenCode and test with !ls, !git status, etc.
```

## Step 5: Log in to npm

```bash
npm login
```

Enter your npm credentials when prompted.

## Step 6: Publish to npm

### First-time publish

```bash
# Make sure you're in the package directory
cd opencode-direct-bash

# Publish as public package
npm publish --access public
```

### Subsequent updates

When you make updates:

1. Update the version in `package.json`:
   ```bash
   npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
   npm version minor  # for new features (1.0.0 -> 1.1.0)
   npm version major  # for breaking changes (1.0.0 -> 2.0.0)
   ```

2. Build and publish:
   ```bash
   npm run build
   npm publish
   ```

3. Push changes to git:
   ```bash
   git push && git push --tags
   ```

## Step 7: Verify Publication

1. Visit your package page: `https://www.npmjs.com/package/opencode-direct-bash`
2. Test installation:
   ```bash
   # In a test directory
   npm install opencode-direct-bash
   ```

## Step 8: Share with Community

### Add to OpenCode Ecosystem

Submit your plugin to the OpenCode ecosystem:
- Create a discussion on [OpenCode Discord](https://opencode.ai/discord)
- Submit to the ecosystem page (check OpenCode docs for process)

### Promote Your Plugin

- Share on social media (Twitter, Reddit, etc.)
- Write a blog post about the plugin
- Add to your GitHub profile README
- Share in relevant developer communities

## Publishing Checklist

Before publishing, ensure:

- [ ] All placeholder text is replaced (author, URLs, etc.)
- [ ] README.md is complete and accurate
- [ ] LICENSE file is included
- [ ] Code builds without errors (`npm run build`)
- [ ] Plugin works in OpenCode (tested locally)
- [ ] Version number is appropriate (semantic versioning)
- [ ] Git repository is public and accessible
- [ ] npm account is set up and logged in

## Troubleshooting

### Package name already taken

If `opencode-direct-bash` is taken, choose a different name:
- `opencode-bash-direct`
- `@yourusername/opencode-direct-bash` (scoped package)
- `opencode-instant-bash`

Update the name in `package.json` and README.md.

### Build errors

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Publish errors

```bash
# Ensure you're logged in
npm whoami

# Check package.json for issues
npm pack --dry-run

# View what will be included
npm pack
tar -tzf opencode-direct-bash-1.0.0.tgz
```

## Version Management

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features (backward compatible)
- **PATCH** (1.0.0 → 1.0.1): Bug fixes

## Maintenance

### Regular updates

- Monitor issues on GitHub
- Respond to community feedback
- Keep dependencies up to date
- Test with new OpenCode versions

### Deprecation

If you need to deprecate the package:

```bash
npm deprecate opencode-direct-bash@1.0.0 "Use version 2.0.0 instead"
```

## Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [OpenCode Plugin Docs](https://opencode.ai/docs/plugins)
- [Semantic Versioning](https://semver.org/)
- [npm CLI Documentation](https://docs.npmjs.com/cli/)

---

Good luck with your plugin! The OpenCode community appreciates your contribution.
