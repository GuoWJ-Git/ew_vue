// Error-log information
declare interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum;
  // Error origin type
  originType: string;
  // Error file
  file: string;
  // Error name
  name?: string;
  // Error message
  message: string;
  // Error stack
  stack?: string;
  // Error detail
  detail: string;
  // Error url
  url: string;
  // Error time
  time?: string;
}
