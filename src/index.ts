/**
 * DirectBashPlugin - Execute bash commands directly without LLM processing
 * 
 * Usage:
 * In OpenCode TUI, type !<command> to execute it directly
 * Examples:
 *   !ls -la
 *   !git status
 *   !npm install
 * 
 * This plugin intercepts prompts starting with ! and executes them
 * as bash commands directly, without sending them to the LLM.
 */
export const DirectBashPlugin = async ({ client, $ }: any) => {
  return {
    event: async ({ event }: any) => {
      // Check for tui.command.execute event with ! prefix
      if (event.type === "tui.command.execute") {
        const command = event.command?.trim()
        
        if (!command || !command.startsWith("!")) {
          return
        }
        
        // Extract command (remove leading !)
        const bashCommand = command.slice(1).trim()
        
        if (!bashCommand) {
          // Show help if only ! is entered
          await client.app.log({
            service: "direct-bash",
            level: "info",
            message: "Usage: !<command> to execute bash commands directly",
          })
          return
        }
        
        try {
          // Log command execution
          await client.app.log({
            service: "direct-bash",
            level: "info",
            message: `Executing: ${bashCommand}`,
          })
          
          // Execute command using Bun shell API
          const result = await $`${bashCommand}`.text()
          
          // Log execution result
          await client.app.log({
            service: "direct-bash",
            level: "info",
            message: "Command executed successfully",
            extra: { 
              command: bashCommand,
              output: result.slice(0, 500) // Only log first 500 characters
            },
          })
          
          // Print output to console
          console.log(result)
          
        } catch (error) {
          // Error handling
          const errorMessage = error instanceof Error ? error.message : String(error)
          
          await client.app.log({
            service: "direct-bash",
            level: "error",
            message: `Command failed: ${bashCommand}`,
            extra: { error: errorMessage },
          })
          
          console.error(`Error: ${errorMessage}`)
        }
      }
    },
  }
}
