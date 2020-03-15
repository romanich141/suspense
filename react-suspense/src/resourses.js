export function useResourse(){
    return {
        posts: wrapPromise(getPosts()), 
    }
}

const delay = ms => {
    return new Promise(resolve => setTimeout(() => { resolve() }, ms))
}

async function getPosts(){
    await delay(3000);
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    return response.json();
};

function wrapPromise(promise){
    let status = 'pending';
    let result;
    const suspender = promise.then(
        r => {
            result = r;
            status = 'success';
        },
        error => {
            result = error;
            status = 'error';
        });
    return {
        read(){
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    }
};