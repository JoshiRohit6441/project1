
let CourseData = [
    {
        id: "1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        title: "HTML",
        para: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
        link: "https://www.w3schools.com/html/"
    },
    {
        id: "2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        title: "CSS",
        para: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        link: "https://www.w3schools.com/css/"
    },
    {
        id: "3",
        img: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
        title: "JavaScript",
        para: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the w.w.w., alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
        link: "https://www.w3schools.com/js/"
    },
    {
        id: "4",
        img: "data:image/png;base64,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",
        title: "JQuery",
        para: "jQuery is a JavaScript framework designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License.",
        link: "https://www.w3schools.com/jquery/"
    },
    {
        id: "5",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixUUULFo5efK4gYc_d6jEQ9asP2v0wawVmw&usqp=CAU",
        title: "Python",
        para: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.",
        link: "https://www.w3schools.com/python/"
    },
    {
        id: "6",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxjpNRTS8lgTN2AFMdpsBwvF5zguP2PJL-g&usqp=CAU",
        title: "React",
        para: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
        link: "https://www.w3schools.com/react/"
    },
    {
        id: "7",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7xKQpnLTTOcyKQsqapAGF8SMBmBclpLZsA&usqp=CAU",
        title: "Angular",
        para: "Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
        link: "https://www.w3schools.com/angular/"
    },
    {
        id: "8",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        title: "Bootstrap",
        para: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        link: "https://www.w3schools.com/bootstrap5/"
    },
    {
        id: "9",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSys1IfnuZa8PCWlOY4MdViuB52B858Yfg9tg&usqp=CAU",
        title: "Django",
        para: "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.",
        link: "https://www.w3schools.com/django/"
    },
    {
        id: "10",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSussiziFN00QkkSa_NjLhux2ecKKoohoS9g&usqp=CAU",
        title: "MySQL",
        para: "  A relational database stores data in separate tables rather than putting all the data in one big storeroom. The database structure is organized into physical files optimized for speed.     ",
        link: "https://www.w3schools.com/mysql/"
    }
];
export default CourseData;