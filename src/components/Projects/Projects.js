import Project from "./Project"

const Projects = () => {
    const projects = [
        { name : "Atom Mühendisleri", description : "It's a website which is embedded an algorithm about chemistry combination.", githubLink : "/atom-muhendisleri-code",  image : "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=854&q=80" },
        { name : "First Demo E-Commerce", description : "An e-commerce demo website. There will be better ones", githubLink : "/first-demo-e-commerce-app", image : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80" },
        { name : "Sight Of Youth", description : "Sight of Youth", websiteLink : "https://sight-of-youth.vercel.app", image : "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
        { name : "Demo Chat App", description : "A simple chat application. There will be better ones (like Real Face Time Application  ) ", githubLink : "/test-acg-chat",websiteLink : "http://test-acg-chat.herokuapp.com", image : "https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80" },
        { name : "Personal Website", description : "A blog and personal website", githubLink : "/personal-website",websiteLink : "https://ahmet-cihangir.vercel.app", image : "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
        { name : "Hulu Clone", description : "A Hulu Clone ", githubLink : "/hulu-clone",websiteLink : "http://hulu-clone.herokuapp.com", image : "https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" },
        { name : "Amazon Clone", description : "An Amazon Clone", githubLink : "/amazon-clone", image : "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
    ]


    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 grid md:grid-cols-2 ">
          {projects.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </div>
      </div>
    );
}

export default Projects
