import Project from "./Project"

const Projects = () => {
    const projects = [
        { name : "Atom Mühendisleri", description : "", githubLink : "/atom-muhendisleri-code",  image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
        { name : "First Demo E-Commerce", description : "", githubLink : "/first-demo-e-commerce-app", image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
        { name : "Sight Of Youth", description : "", websiteLink : "https://sight-of-youth.vercel.app", image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
        { name : "Demo Chat App", description : "", githubLink : "/test-acg-chat",websiteLink : "http://test-acg-chat.herokuapp.com", image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
        { name : "Personal Website", description : "", githubLink : "/personal-website",websiteLink : "https://ahmet-cihangir.vercel.app", image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
        { name : "Hulu Clone", description : "", githubLink : "/hulu-clone",websiteLink : "http://hulu-clone.herokuapp.com", image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
        { name : "Amazon Clone", description : "", githubLink : "/amazon-clone", image : "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
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
