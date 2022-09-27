import profile from './assets/profile.jpg';

export default function AboutMe() {
    return(
        <div className='aboutMe'>
            <img className='profile' src={profile} alt="profile"></img>
            <p>
                    Full-stack web developer excited to develop responsive websites 
                and collaborate with others to create meaningful applications. Recently earned 
                a certificate in full stack development from the University of Arizona Coding 
                Bootcamp, with newly developed skills in technologies like JavaScript, CSS, 
                Node.js, React.js, ect. Known as a great problem solver, excited to be developing
                apps, with a focus on performance and accessibility. With each project, my aim is
                on how to best engage my audience for an impactful user experience. Recently I 
                applied aspects of Express and React in a project. I worked on a team of four to 
                develop a multi-page application that allowed users to buy and sell clothing, 
                contained a login-logout system, and gave the user the ability to post reviews 
                on other user's posts. I am excited to use my skills as part of a fast-paced, 
                quality-driven team to build better experiences on the web.
            </p>
        </div>
    )
}