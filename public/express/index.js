function m1(){
    fetch('http://localhost:3001/express')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta.');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
}