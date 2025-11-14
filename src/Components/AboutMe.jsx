export default function AboutMe(props) {
    const resumeLink = "/Resume.pdf";//"https://docs.google.com/document/d/1tFriWYby8soySQQZA-mVENlrieg_iO-XsoabbA5DqhM/edit?usp=sharing";
    const emailLink ="mailto:joaquin@royerdesign.com";
    const githubLink ="https://github.com/Joaqstarr";
    const itchLink ="https://joaqstarr.itch.io/";

    return(
        <div className="bg-gray-800 w-screen min-h-56">
            <div className="md:w-2/3 m-auto p-8 ">
                <div className="flex flex-col-reverse md:flex-row gap-10 justify-around">
                    <div>
                        <h2 className="text-5xl font-bold text-blue-100 mb-7">About Me</h2>
                        <p className="text-blue-100 max-w-screen-sm mb-4 text-xl italic">Hello!</p>
                        <Paragraph>I am a senior Digital Media/Game Design Major at the University of Central Florida
                            minoring in Computer Science. I have loved programming and developing games ever since I was
                            10 years old and I don't plan on stopping soon! I love solving complex problems through code
                            in readable and efficient ways. I have experience in both Unity and Unreal engine.</Paragraph>
                        <Paragraph>For 2 years, I was the president of the Game Dev Knights, the game
                            development club at UCF, where I educate and help people get started in Game
                            Development. My favorite game series is The Legend of Zelda, but I play pretty much any genre
                            in my free time.</Paragraph>
                        <div className="flex flex-row mt-6 border-t-2 border-blue-100 border-dashed pt-4 gap-5" newTab={true}>
                            <IconButton link={githubLink} icon="fa-brands fa-github" text="Github" newTab={true}/>
                            <IconButton link={itchLink} icon="fa-brands fa-itch-io" text="Itch" newTab={true}/>
                            <IconButton link={resumeLink} icon="fa-file" text="Resume" newTab={true}/>
                            <IconButton link={emailLink} icon="fa-envelope" text="Contact Me" newTab={false}/>

                        </div>
                    </div>


                    <div className="overflow-hidden rounded-2xl ">
                    <img width="300px" className="rounded-2xl m-auto" src="/assets/headshot.jpg" alt="headshot"/>

                    </div>

                </div>
            </div>
            <div className="h-24"></div>
        </div>
    )
}

function IconButton({link, icon, text, newTab}){
    return (
        <a href={link} target={newTab?"_blank":""} className="h-min text-blue-100 flex flex-col justify-center items-center hover:animate-bounce cursor-pointer">
            <i aria-hidden="true" className={`fa-solid text-3xl ${icon}`}/>
            <label className="cursor-pointer">{text}</label>
        </a>
    )
}

function Paragraph(props){
    return (
        <p className="text-blue-100 max-w-screen-sm mb-4">{props.children}</p>
    )
}