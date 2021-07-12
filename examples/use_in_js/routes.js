const routes = [
    {
        path: "/home",
        component: () => <div>home</div>,
        meta: { //extra info
        }
    },
    {
        path: "/about/:type",//dynamic segment 'type'
        component: () => <div>About</div>
    },
    {
        path: "/user",
        component: User,
        children: [
            //if matching "/user", router will jump to "/user/profile".
            {
                path: "", //or use absolute path "/user"
                redirect: "profile" //or use absolute path "/user/profile"
            },
            {
                path: "profile", //or use absolute path "/user/profile"
                component: Profile,
            },
            {
                path: "*", //404
                component: () => <div>Not Found</div>
            },
            //and more……
        ]
    },
    {
        path: "*", //404
        component: () => <div>Not Found</div>
    },
];
export default routes