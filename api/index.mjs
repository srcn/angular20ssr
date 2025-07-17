const { app } = await import("../dist/angular20ssr/server/server.mjs");

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
