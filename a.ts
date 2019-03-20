class a {
    static create(arg3: String) {
        return Promise.resolve(new b(arg3));
    }
}

class b {
    appName: any;
    constructor (name: String) {
        this.appName = name;
    }
    listen(port: Number) {
        return `Listening on port ${port} for app ${this.appName}`;
    }
}

export { a, b };
