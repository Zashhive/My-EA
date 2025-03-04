//This is a simplified version of the provided config.  Full implementation would be extensive.
  export const agentConfig = {
    tasks: [
      {
        id: "test-task",
        description: "Test Task",
        trigger: {type: "manual"},
        action: {type: "console-log", message: "Test task executed!"}
      }
    ]
  };
