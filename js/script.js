/*
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

const app = new Vue({
    el: "#app",
    data: {
        email: null,
        mails: []
    },
    
    created () {
        for (let i = 0;  i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            this.email = response.data.response;
            console.log(this.email)
            this.mails.push(this.email)
        })
            .catch((error) => {
            console.log(error);
            })
            
            
        }
    }
    
    
})

// while (this.mails.length < 10 ) {
//     let element =  response.data.response; 
//     if (!this.mails.includes(element))  
//     this.mails.push(element)
// }