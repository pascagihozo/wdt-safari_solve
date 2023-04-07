import React from "react"

const About= () => {
    return(
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pascal Gihozo</h2>
            <p class="mb-4">My skills include proficiency in Java, Python, Django REST framework,
            Firebase, and Cloud Firestore. I have gained experience participating
             in hackathons and internships, where I demonstrated strong problem-solving
           and teamwork skills.</p>
            <p>I am highly motivated to learn and grow as a software engineer and 
              am eager to take on new challenges and responsibilities.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="gihozo.jpg" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="gihozo.jpg" alt="office content 2"/>
        </div>
    </div>
</section>

  );
};

export default About;
