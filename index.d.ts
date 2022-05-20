import { PoolConfig } from "mariadb";

declare type DatabaseInitializationConfiguration = {
    auth: PoolConfig;
    definitionFilePaths?: string[];
    initialDataFilePaths?: string[];
    sharedDefinitionNames?: string[];
    sharedInitialDataNames?: string[];
    meta?: {
        dataPath?: string;
        definitionPath?: string;
        requiredMariaMajorVersion?: number;
    }
}

export default function initializeDatabase (config: DatabaseInitializationConfiguration): Promise<void>;
