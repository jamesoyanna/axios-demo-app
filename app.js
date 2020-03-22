function performGetRequest1(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

axios.get("http://jsonplaceholder.typicode.com/todos")
.then(function (response){
    resultElement.innerHTML = generateSuccessHTMLOuput(response)
})
.catch(function(error){
    resultElement.innerHTML = generateErrorHTML(error);
});
}