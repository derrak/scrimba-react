const navbar = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>
                "Pricing"
            </li>
            <li>
                "About"
            </li>
            <li>
                "Contact"
            </li>
        </ul>

    </nav>

//React 17 render:    
// )
// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )

// React 18 render (one line version)
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// React 18 render multi line version
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
