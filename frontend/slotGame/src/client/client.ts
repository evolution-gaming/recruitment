
const spin = async () => {
    const port = 3000;
    const result = await fetch(`http://localhost:${port}/spin`);
    const data = await result.json();
    console.log(data);
}
