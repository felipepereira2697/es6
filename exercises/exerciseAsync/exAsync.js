function ageCheck(age){
    return new Promise((resolve, reject) => {
        if(age > 18){
            resolve(() => {
                setTimeout(() => {
                    resolve('Yes'), 2000
                })
            });
        }else{
            reject('No')
        }
    })
}

function searchGitHub(){
    let username = document.querySelector('#github').value;
    console.log(username);
    //https://api.github.com/users/felipepereira2697/repos
    let url = 'https://api.github.com/users/'+username+'/repos';
    axios.get(url)
    .then((response) => {
        let ul = document.createElement('ul');

        response.data.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = element.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    })
    .catch((error) => {
        console.warn(error);
        let errorMsg = document.createElement('p');
        errorMsg.innerHTML = error;
        document.body.appendChild(errorMsg);
    });

}

ageCheck(20).then(() => {
    console.log('Yes, bigger than 18');
}).catch(function(){
    console.log('No, not bigger than 18');
})