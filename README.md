# opencode-direct-bash

> Execute bash commands directly in OpenCode without LLM processing

An OpenCode plugin that allows you to run bash commands instantly using the `!` prefix, bypassing the AI agent for immediate command execution.

## Features

- **Instant Execution**: Run bash commands immediately with `!` prefix
- **No LLM Overhead**: Commands execute directly without AI processing
- **Real-time Feedback**: See command output and errors instantly
- **Execution Logging**: All commands are logged for audit trails
- **Error Handling**: Clear error messages when commands fail

## Installation

### Method 1: npm Package (Recommended)

Add the plugin to your OpenCode configuration:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-direct-bash"]
}
```

OpenCode will automatically install the plugin on startup.

### Method 2: Global Plugin Directory

Install manually in your global config:

```bash
# Create plugin directory if it doesn't exist
mkdir -p ~/.config/opencode/plugin

# Copy the plugin file
cp src/index.ts ~/.config/opencode/plugin/direct-bash.ts
```

### Method 3: Project-Level Installation

Install for a specific project:

```bash
# In your project root
mkdir -p .opencode/plugin
cp src/index.ts .opencode/plugin/direct-bash.ts
```

## Usage

In the OpenCode TUI, simply prefix any bash command with `!`:

### Basic Examples

```
!ls -la
```
Lists all files in the current directory.

```
!git status
```
Shows the current git repository status.

```
!npm install
```
Installs project dependencies.

### More Examples

```
!pwd                          # Print working directory
!echo "Hello, World!"         # Echo text
!node --version              # Check Node version
!python3 --version           # Check Python version
!docker ps                   # List running containers
!kubectl get pods            # List Kubernetes pods
!cat package.json            # Display file contents
!grep "TODO" src/**/*.ts     # Search for TODOs
```

## How It Works

1. Plugin intercepts user input via `tui.prompt.append` hook
2. Detects if input starts with `!`
3. Extracts and executes the command using Bun shell API
4. Shows execution result or error message
5. Prevents original input from being sent to the LLM

## Configuration

No configuration required! The plugin works out of the box.

## Important Notes

- Commands execute in the current working directory
- Make sure commands are safe - they execute directly without validation
- Long-running commands may block the UI
- Command execution is logged in OpenCode's logging system
- Standard output and errors are captured and displayed

## Technical Details

- Written in TypeScript with full type support
- Uses Bun's shell API (`$`) for command execution
- Leverages OpenCode SDK for logging and toast notifications
- Uses `output.prevent = true` to block input from reaching the LLM

## Requirements

- OpenCode v1.0 or later
- No additional dependencies required

## Troubleshooting

### Plugin Not Loading

1. Verify the file is in the correct directory:
   - Global: `~/.config/opencode/plugin/direct-bash.ts`
   - Project: `.opencode/plugin/direct-bash.ts`
   - Or added to `opencode.json` config

2. Restart OpenCode

### Command Execution Fails

- Verify the command syntax is correct
- Check if you have necessary permissions
- Review OpenCode logs for detailed error messages
- Ensure the command is available in your PATH

### No Output Visible

- Check OpenCode logs using the logging interface
- Some commands may not produce output (e.g., `cd`)
- Try commands with explicit output (e.g., `!echo test`)

## Examples in Action

**Check system information:**
```
!uname -a
!which node
!df -h
```

**Git operations:**
```
!git log --oneline -5
!git branch
!git diff HEAD
```

**Package management:**
```
!npm list --depth=0
!yarn why package-name
!bun outdated
```

**Docker operations:**
```
!docker images
!docker-compose ps
!docker logs container-name
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - see LICENSE file for details

## Author

Created for the OpenCode community

## Links

- [OpenCode Documentation](https://opencode.ai/docs)
- [OpenCode Plugins](https://opencode.ai/docs/plugins)
- [GitHub Repository](https://github.com/yourusername/opencode-direct-bash)

## Changelog

### 1.0.0
- Initial release
- Basic command execution with `!` prefix
- Error handling and logging
- Toast notifications for feedback
