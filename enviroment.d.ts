declare namespace NodeJs {
  export interface ProcessEnv {
    MYSQL_DB_HOST?: string;
    MYSQL_DB_PORT?: string;
    MYSQL_DB_USER?: string;
    MYSQL_DB_PASS?: string;
    MYSQL_DB_NAME?: string;
    PORT?: string;
    ENVIRONMENT: Environment;
  }
  export type Environment = 'DEVELOPMENT' | 'PRODUCTION';
}
