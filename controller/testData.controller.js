import dummyjson from 'dummy-json';

const sendTestData = async (req, res) => {
    console.log("inside the funciton")
    req.log.info('something else')
    const template = `{
        "users":[
            {{#repeat 3}}
            {
                "name": "{{firstName}}",
                "age": "{{int 18 65}}"
            }
            {{/repeat}}
        ]
    }`;
    return res.send(dummyjson.parse(template));
}

export default sendTestData;