/** A example of a "complex" "Hello World". */
export class ComplexHelloWorld {

  /**
   * @param message Defines a message to show on console.
   * @returns A console log with message.
   */
  public sendMessage(message: string): void {
    console.clear();
    return console.log(message);
  }

  public exit(code = 0): void {
    process.exit(code);
  }
}

const app = new ComplexHelloWorld();

app.sendMessage('Hello World!');
app.exit();
