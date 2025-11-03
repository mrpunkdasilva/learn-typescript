let myObject = {
    greeting: "Hi, there",
    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`);
    }
}
greeting = "Hello";
let writer = myObject.getWriter();
writer("It is raining today");
let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");
