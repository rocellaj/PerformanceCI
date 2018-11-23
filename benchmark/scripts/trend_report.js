$.get("www.example.com/page_b/my_file.txt", function(contents){
   //contents variable now contains the contents of the textfile as string

   //check if file contains the word Hello
   var hasString = contents.includes("Hello");

   //outputs true if contained, else false
   console.log(hasString);
})