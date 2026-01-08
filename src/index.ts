import type { Plugin } from "@opencode-ai/plugin"

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
export const DirectBashPlugin: Plugin = async ({ client, $ }) => {
  return {
    "tui.prompt.append": async (input, output) => {
      const prompt = input.prompt.trim()
      
      // Check if prompt starts with !
      if (!prompt.startsWith("!")) {
        return
      }
      
      // Extract command (remove leading !)
      const command = prompt.slice(1).trim()
      
      if (!command) {
        // Show help if only ! is entered
        await client.app.log({
          service: "direct-bash",
          level: "info",
          message: "Usage: !<command> to execute bash commands directly",
        })
        output.prevent = true
        return
      }
      
      try {
        // Log command execution
        await client.app.log({
          service: "direct-bash",
          level: "info",
          message: `Executing: ${command}`,
        })
        
        // Execute command using Bun shell API
        const result = await $`${command}`.text()
        
        // Log execution result
        await client.app.log({
          service: "direct-bash",
          level: "info",
          message: "Command executed successfully",
          extra: { 
            command,
            output: result.slice(0, 500) // Only log first 500 characters
          },
        })
        
        // Show success toast notification
        await client.tui.toast.show({
          message: `Command executed: ${command}`,
          level: "success",
        })
        
      } catch (error) {
        // Error handling
        const errorMessage = error instanceof Error ? error.message : String(error)
        
        await client.app.log({
          service: "direct-bash",
          level: "error",
          message: `Command failed: ${command}`,
          extra: { error: errorMessage },
        })
        
        await client.tui.toast.show({
          message: `Command failed: ${errorMessage}`,
          level: "error",
        })
      }
      
      // Prevent prompt from being sent to LLM
      output.prevent = true
    },
  }
}
