export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>React App</title>
            <meta name="description" content="Web site created..."/>
            <script src="https://kit.fontawesome.com/a698b42bb1.js" crossOrigin="anonymous"></script>

        </head>
        <body>
        <div id="root">{children}</div>
        </body>
        </html>
    )
}