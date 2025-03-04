import {CredentialManager} from './CredentialManager';
  import {TaskExecutor} from './TaskExecutor';
  import {TriggerMonitor} from './TriggerMonitor';
  import {Logger} from './Logger';
  import {LanguageProcessor} from './LanguageProcessor';
  import {UserInteractionManager} from './UserInteractionManager';

  export class AutonomousAgent {
    constructor(config) {
      this.config = config;
      this.credentialManager = new CredentialManager();
      this.taskExecutor = new TaskExecutor(this.credentialManager);
      this.triggerMonitor = new TriggerMonitor();
      this.logger = new Logger();
      this.languageProcessor = new LanguageProcessor();
      this.userInteractionManager = new UserInteractionManager();
    }
    async start() {
      this.logger.info("Starting Autonomous Agent...");
      for (const task of this.config.tasks) {
        this.triggerMonitor.registerTask(task);
      }
      this.logger.info("Autonomous Agent started.");
    }
  }
