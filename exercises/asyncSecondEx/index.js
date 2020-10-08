const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    },2000);
})


async function execPromise() {
    //quero a mesma coisa q o .then 
    console.log(await myPromise());
    //só vai ser executada depois de acabar a primeira
    console.log(await myPromise());
    console.log(await myPromise());

}

execPromise(); 