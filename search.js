function search() {
    //Search one specific site - not the whole web

    //1. Specify the site to be searched - douglas college 
    //Looking for info about courses
    var site = 'douglascollege.ca';

    //2. Get what the user has typed into the box
    var texttosearch = document.getElementById('textlookfor').value; //This was not receiving value with autocomplete

    //3. Create URL is the box is not blank
    if (texttosearch.length > 0) {

        //4. Add another search engine based on dropdown selector
        var sechoice = document.getElementById('dropdown').value;

        if (sechoice == 1) {

            var myURL = "https://www.bing.com/search?q=" + encodeURIComponent(texttosearch) + " site:" + site;
            location.href = myURL;
            console.log(myURL);

        } else {
            var myURL = "https://www.google.com/search?q=" + encodeURIComponent(texttosearch) + " site:" + site;
            location.href = myURL;
            console.log(myURL);
        }
    } else {

        alert('Please type something to search for');

    }
}