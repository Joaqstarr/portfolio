export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>

            <meta name="keywords" content="Game Programmer, Joaquin Royer, Unity, C#, Unreal, C++, Game Design"/>
            <meta name="author" content="Joaquin Royer"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <link
                rel="apple-touch-icon"
                href="/icons/apple-touch-icon.png"
                type="image/<generated>"
                sizes="<generated>"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=M+PLUS+1:wght@100..900&family=Ramabhadra&display=swap"
                rel="stylesheet"/>

            <script src="https://kit.fontawesome.com/a698b42bb1.js" crossOrigin="anonymous"></script>

        </head>
        <body>
        <div id="root">{children}</div>
        </body>
        </html>
    )
}