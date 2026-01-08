# opencode-direct-bash - Package Summary

## Package Information

**Name:** opencode-direct-bash  
**Version:** 1.0.0  
**License:** MIT  
**Type:** OpenCode Plugin

## What's Included

```
opencode-direct-bash/
├── src/
│   └── index.ts              # Main plugin source code
├── .gitignore                # Git ignore rules
├── .npmignore                # npm publish ignore rules
├── CONTRIBUTING.md           # Contributing guidelines
├── LICENSE                   # MIT license
├── PUBLISHING.md             # Step-by-step publishing guide
├── README.md                 # Complete documentation
├── package.json              # npm package configuration
└── tsconfig.json             # TypeScript configuration
```

## Features

- Execute bash commands directly with `!` prefix
- No LLM overhead for instant execution
- Real-time feedback via toast notifications
- Complete error handling
- Execution logging
- Full TypeScript support

## Installation Methods

Users can install via:

1. **npm package** (recommended):
   ```json
   {
     "plugin": ["opencode-direct-bash"]
   }
   ```

2. **Global plugin directory**:
   ```bash
   cp src/index.ts ~/.config/opencode/plugin/direct-bash.ts
   ```

3. **Project-level**:
   ```bash
   cp src/index.ts .opencode/plugin/direct-bash.ts
   ```

## Usage Examples

```
!ls -la
!git status
!npm install
!docker ps
!kubectl get pods
```

## Next Steps for Publishing

1. **Update package.json** - Replace placeholder author and repository URLs
2. **Create GitHub repository** - Host the code publicly
3. **Build the package** - Run `npm run build`
4. **Test locally** - Verify plugin works in OpenCode
5. **Publish to npm** - Run `npm publish --access public`
6. **Share with community** - Post on OpenCode Discord

## Publishing Commands

```bash
# Navigate to package
cd ~/.config/opencode/opencode-direct-bash

# Update author and URLs in package.json
# (Edit package.json manually)

# Initialize git
git init
git add .
git commit -m "Initial commit: opencode-direct-bash plugin"
git remote add origin https://github.com/YOUR_USERNAME/opencode-direct-bash.git
git push -u origin main

# Install dependencies and build
npm install
npm run build

# Login to npm
npm login

# Publish
npm publish --access public
```

## Testing Before Publishing

```bash
# Copy to OpenCode config
cp src/index.ts ~/.config/opencode/plugin/direct-bash.ts

# Restart OpenCode

# Test commands
!ls
!pwd
!git status
```

## Documentation

- **README.md** - Complete user documentation with examples
- **CONTRIBUTING.md** - Guidelines for contributors
- **PUBLISHING.md** - Detailed publishing instructions

## Support

- GitHub Issues (after publishing)
- OpenCode Discord: https://opencode.ai/discord
- OpenCode Docs: https://opencode.ai/docs/plugins

## Keywords for npm

- opencode
- opencode-plugin
- bash
- command
- cli
- shell
- terminal
- direct-execution
- ai-agent

These keywords help users discover the plugin on npm.

---

**Ready to publish!** Follow the PUBLISHING.md guide for detailed instructions.
