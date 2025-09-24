 
 const head=React.createElement(
    'div',{id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [React.createElement(
            'h1',
            {id:'head'},
            'This is child attribute h1 tag'
        ),React.createElement(
            'h2',
            {id:'heading'},
            'This is child attribute h2 tag'
        )]
    )

);

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(head);