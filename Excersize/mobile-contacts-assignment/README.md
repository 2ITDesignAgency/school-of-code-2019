## PREREQS:

- input:autofocus

- for ... in loop
- for ... in loop (PRACTICE)

    const movie = {
        Title: "Joker",
        Year: "2019",
        imdbID: "tt7286456",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    };    

1) Loop over the properties of movie and display them
2) Loop over the properties of movie and display their associated values
3) Loop over the properties of movie and check if one of the properties contains the value 'joker' (case insensitive)

- String.prototype.replace( PATTERN, REPLACEWITH )
- String.prototype.replace (PRACTICE)

    1) Replace the word World in the following String "<p>Hello World</p>"
    with "<strong>World</strong>"

    2) Enclose the word Hello in the following String "<p>Hello World</p>"
    with a <mark> HTML, and add it to the document.body innerHTML

- String()
    - Convert the following values to String:
    let birthOfJavaScript = 1995;
    let currentYear - 2019;
    - Loop over the object properties with for ... in, convert the values to String, and display in the console. Make sure also to console.log the 'typeof' of each value to ensure that we get 'string'
    const list = { a: 1000, b: 2001, c: 3002 }

- ELEMENT.addEventListener( "keyup", FUNCTION )
    - Create an input field, use the keyup event to trigger a function on each key lift, and display
    the input in UPPERCASE to a div in the document.

- String.prototype.indexOf()

    const str = "JavaScript";
    str.indexOf("Java");
    str.indexOf("J");
    str.indexOf("Script");
    str.indexOf("script");
    str.indexOf("ZZZ");

    Practice: create an input field, make sure to capture the user's input, and if the user's input
    matches the string 'password', add the following String to the innerHTML of a div element:
    "Correct!"

- Template Literals: `Some ${value} here.`
    - Create an HTML String: "<p>Hello <strong>World</strong></p>" by using template literals
    and the following variables, and append it to the document body:
    const str1 = "Hello";
    const str2 = "World";

## INSTRUCTIONS:

- Make sure the input has autofocus, so that on load, the user can start entering the phone number immediately

- const contacts = {
    kostas: 6986100100,
    maria: 6986100200,
    george: 6986300300,
    sofia: 6986300400,
    chris: 6987500500,
    marina: 6944600600
  }
