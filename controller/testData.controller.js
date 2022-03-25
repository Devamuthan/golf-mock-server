import dummyjson from 'dummy-json';

const sendTestData = async (req, res) => {
    console.log("inside the funciton")
    req.log.info('something else')
    const template = `{
        "articles":[
            {{#repeat 10}}
            {
                "id": "{{@index}}",
                "title": "{{lorem min=2 max=4}}",
                "description": "{{lorem min=15 max=20}}",
                "author": "{{firstName}}"
            }
            {{/repeat}}
        ]
    }`;
    return res.send(dummyjson.parse(template));
}

export default sendTestData;