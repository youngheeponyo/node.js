function webServerConnet(){
    return fetch('http://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control' : 'no-cache'
        }
    })
    .then(response=>response.json());
}

async function getJSONData(){
    const result = await webServerConnet();
    console.log(result);
}

getJSONData();