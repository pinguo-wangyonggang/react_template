const navData = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'dashboard',
        children: null
    },
    {
        name: 'Usercenter',
        url: '/usercenter',
        icon: 'user',
        children: [
            {
                name: 'Usercenter',
                url: '/usercenter',
                children: null
            }
        ]
    }
];

export default navData;
