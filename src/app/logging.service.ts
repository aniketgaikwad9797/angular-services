export class LoggingService {
  onStatusChangeLog(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
