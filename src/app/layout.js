export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>React App</title>
            <meta name="description" content="Web site created..." />
        </head>
        <body>
        <div id="root">{children}</div>
        </body>
        </html>
    )
}