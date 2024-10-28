export default function AboutMe(props) {
    return(
        <div className="bg-gray-800 w-screen min-h-56">
            <div className="md:w-2/3 m-auto p-8">
                <h2 className="text-5xl font-bold text-blue-100 mb-7">About Me</h2>
                <div className="flex flex-col md:flex-row gap-10">
                    <p className="text-blue-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
                        ornare velit nec porta. In consectetur massa vel neque blandit malesuada id vel risus. Maecenas
                        mauris augue, dapibus et dictum eu, posuere sit amet nulla. Duis sagittis orci vel pharetra
                        dictum. Nulla facilisi. Duis ligula tellus, tincidunt sit amet ultrices id, interdum vitae
                        purus. Nunc lorem sapien, blandit sit amet semper ac, tempor vel tortor. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis tristique
                        semper.</p>
                    <img className="rounded-2xl w-full" src="https://media.licdn.com/dms/image/v2/D4E03AQGBenxxvmdvKw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705026924281?e=2147483647&v=beta&t=X0lcKnr2gvK0nBBx-skCijktP5bb1-Offr4p9gl-NIc" alt="headshot"/>

                </div>
            </div>

        </div>
    )
}