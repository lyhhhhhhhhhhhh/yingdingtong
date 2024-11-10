const { generateService } = require("@umijs/openapi");

generateService({
    requestLibPath: "import request from '@/lib/request'",
    //注意这里的路径 需要根据后端实时路径 需要改变
    schemaPath: "http://localhost:8101/api/v2/api-docs",
    serversPath: "./src",
});
