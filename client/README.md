Node version 10.13.0 - you can use nvm use and it will automatically detect
The form 

- Button is a separate component which can be easily reused by other teams etc

- According to http://web-accessibility.carnegiemuseums.org/code/search/, a search bar should be set up with label and input  
 also I have added role='search' so that it can be easily identified a section of the page. This is all part of ARIA (W3C specification) and will benefit screen reader users 
 
 
 - Why is results list a separate component? - Because of different use cases, so for example if you wanted to re use the result experience but with a different search form then you could easily do so. Its not tightly coupled with the same search form. 
 


