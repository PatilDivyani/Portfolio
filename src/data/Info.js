const INFO = {
  main: {
    title: "Portfolio",
    name: "DIVYANI PATIL",
    email: "patildivyani30@gmail.com",
    logo: "../logo.png",
  },

  socials: {
    twitter: "https://twitter.com/",
    github: "https://github.com/PatilDivyani",
    linkedin: "https://www.linkedin.com/in/divyani-patil-9a0680114/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  homepage: {
    title: "Full-stack web and mobile app developer, and amateur astronaut.",
    description:
      "I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
  },

  about: {
    title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
  },

  articles: {
    title:
      "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
    description:
      "Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
  },

  projects: [
    {
      title: "Travel Media",
      description:
        "The TravelXperience App is a cutting-edge travel media application developed using the React framework, designed to offer users an immersive and personalized travel exploration experience.",
      logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      linkText: "View Project",
      link: "https://thriving-phoenix-b77d81.netlify.app/",
    },

    {
      title: "Shopping Cart",
      description:
        "A shopping cart implemented in JavaScript is a crucial component of e-commerce websites, enabling users to select, view, and manage items they intend to purchase.",
      logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
      linkText: "View Project",
      link: "https://patildivyani.github.io/ShoppingCart/",
    },

    {
      title: "YouTube Clone",
      description:
        "A YouTube clone created using JavaScript  along with HTML and CSS, is a web application that emulates the core features and functionalities of the popular video-sharing platform",
      logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAewMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAYFB//EADwQAAEDAgMEBwYEBAcAAAAAAAEAAgMEEQUSITEyQVEGEyIzYXGBFFKRscHRI6Hh8DVCU2IVFiRlcnOC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAcEQEAAwADAQEAAAAAAAAAAAAAAQIREiExYQP/2gAMAwEAAhEDEQA/ANlsSoSIFXLxXHaTC+xKTJMRcRM2+Z5J2OYmMMoXSNsZndmNp58/ILCRRSVMxllcZJHm5c7Uk8yuZtjqI1oG9MZS/wDh4yf92vyXcw7GaTERaNxZLxifo79fRZMU4iLY2MMk7tjQnVWFVccbZC0F4It1ZNweC45u+DdoXF6PYpNWxvgq2kTw2u73h5cCu0tInWcxgQhCqBCEIBCEIERZKhAJEqr19R7JQVFR/Tjc4eYCDG4/Wf4hiz42G8cHYb4nifjp6KSni9niDsuaV+jGrm4WzrJQXnMT2j4ru0bW1M0sj2hzR2ADs/f3XntPb0VhZoIRS3zgOlee3IDfXl4BXlUo6CnppJpImBrpHXs0ANA5ABOr5Jo4QYIjK5zg3KHZTquc2enXnpYLQY4x+wTxlp8xqu4sdU1ZjxOjjbnaWgvLXm5aSdBf0PxWvY4PY1w2OFwtvz8xjf3TkIQtGYQhCBEqEIBCEIBUMdY6TBa1rBdxidoPJX0hFxYoPNqCTI86/wAq0GBPY+CRgIL2vuRxAsLfJc3G8GlwqoM0DS6kcbgj+T+0/Qp+AygVUxa6zntaQPK9/mFheHopLuvqDDI5r43ZALh7Rf4pz543QGcuyxgElxFrBK+ZrYXvkacrGlx0usjimLyYm4Rxgx04Nwy+rvE/ZcVrrq1oggqTVYq6pNwC4WB4DS35BegUF/Yoc23ICsFg9BLV1LYo2kE6ud7rea9Da0NaGt0AFgt6x2wtJyEIXbgIQhAJDsSpDsKBocbp6ibvBSoBUMTxekwpjXVTyC++VrRclX1henYcMTpid0w6fEoJcS6YPqIXw0VP1YeCC+WxPoNisYVhdJitJFXUkj6SpabSNZq0PG3Q7AfqseNPFd7olXmjxF0JI6qoFrE2AcNh+Y+Cmau41ZhfE0NlILrauboD5clzqjA4Kl4qWR3nYbvaAAJORI4nw0vxU8fSGlqcQfS5SW2s199HHW9vpzV1j+pma612l+RZ8eM/HfLlH1Xw2uwemiLIqyJrifxDK7I8u8QbLsNIcAWm4Owhec4sZJK2UVUbGzgnM9otmHA28vktH0TxHNQmlkN3QXym+uVas2kSKHryC0FgBIvq5IJXgvu29nWGvkgsIUTpSMoDbvPC+xNEp60tt2iBZvLmgnSO2FMfvJRuIGN3gplC3eCmRAsp08pS+ip6pov1Ty13gHfqB8Vq1VxKjbX0E9K+1pGkA8jwPxsivKWP4FSsfkdY7eBUeR8FQ+KUZXsJaRyIXWocHdX0rnNe1rgey8OuAfdcNo8xzUmcWI3xzhLqNoI2EFbfo/ibcVhMU77VMfaLdO2Pe+6xM8ElPM6GduWRp1H1CdSVEtJURzwvySRm4d9CqjU9KqENpmVjAc0Tsr/+JOn5/NcbD691BVNnbcsfdsjb8DtWlra2LFOi9VUs0vEczfccOCx0cUk1NJ1Ub5CDchovYXQelRGOsgZJFKXRPbpa2qmEeVziCe1w8VhejeOmhm6id16d51/tPNbtj2yMD2ODmnUEG4KCJ0OVpcHuz7c2iYxmZ+pN9NeOisSbhUMXeIHybyc3u02Te9E5vd+iBjd4KVRM3gpkAhCEGE6bYWYKtuIQjsS6SW4O5+o+S4NJV1FOc8EzoyduU7fNepVtJFXUklNOLxyCx8PFeYV9BNhVdJTVA0GrXcHDgQgv1OJw4nAW1sPVzsHYli58iDwXLsOLiRyDVEJRex2J+dvMKRGLM6tQ1s0FLPTROtFPbODreyjpp5KeobLE7K8aX81C2793ZzKu0OHTV0zYabK6VzS4ZnWGnoqiqZHOkMjnEvcbk8ytX0NxBzppKR50cM4HIjb8fouOOieMNfbqWEc+sFlo+jXR+XDpHVNWW9cRlaxpuGjnfmg0Mm47yUUPeKWTu3KGHvAgfLveic3u0yXf9E9ndeiBjN4KdQM3gp0AhI42CRrroFuudjeDQYxS9XL2JW6xyAatP28Fdee0U9u6EHk2IYdLh1Y6lqHx9Y0AktNxqomhgPvHx0Cmxep9sxWqnvcPkOXy2D8gq8e1BOSTt4bPBdno9L1WKUcm6M+U+NwR8yFxVboXlp7OhaQQg9RVeQkPOqfSzCopopm7HtDlHL3hQSO7j0UcHeeikPcf+VFB3g8kD5t/0T2d0o59/wBFIzuvRVEbN8Kwq7N8KwoprwS3Tamxggm4UiEEMjXF5IGiixCb2XC6iY6GOJx9bK2qeK0bq/Dp6VkgjMrbZiL21QeSqWLatI/ocI3lj8SjDhtHVH7pR0TyH+Ix7P6LuPqgz6lo3/6gt5ru/wCVf9xj0tf8F33RF0U6uXrBiMZtqfwnffwQd/oxUdZROgJ1idp5H9brpyxvc8kN0XLwXDnUc7pG1DZGluUgMI8tq6ftkZNhmPp++aCUtPU5ba2UcMb2yXIsECsjNrXPkPL7qdpDmgjYRdBFKxzn3AuLJ7ARHYjWyehBAxjg4EhToSIFQhCAQhCBLJCBbYEIQFhroiw5BCECgJLDkhCAsOSchCAQhCAQhCD/2Q==",
      linkText: "View Project",
      link: "https://patildivyani.github.io/YouTube_Clone/",
    },

    {
      title: "Signup Page",
      description:
        "A signup page implemented using React.js is a fundamental aspect of modern web applications, facilitating user registration and account creation within a dynamic and interactive interface.",
      logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      linkText: "View Project",
      link: "https://spontaneous-frangipane-1712e0.netlify.app/",
    },

    // {
    //   title: "Project 5",
    //   description:
    //     "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
    //   logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
    //   linkText: "View Project",
    //   link: "https://github.com",
    // },
  ],
};

export default INFO;
