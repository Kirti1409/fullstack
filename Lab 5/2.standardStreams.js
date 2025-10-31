process.stdout.write("What is your name? ");
process.stdin.on('data', (input) => {
    console.log("Hello, " + input.toString().trim());
    process.exit();
});