module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscore: true
        }
    },
    jwtSecret: "Nta$k-AP1",
    jwtSession: {session: false}
};