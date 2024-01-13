module.exports={
    extends:['@commitlint/config-conventional'],

    parsePreset:{
        parserOpts: {
            issuePrefixes: [ "ABC", "#"],
        },
    },
    rules:{
        "references-empty":[2,"never"],
    },
};