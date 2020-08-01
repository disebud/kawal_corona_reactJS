export default {
    items: [
        {
            id: 'international',
            title: 'Global Data Per Negara',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/global_data',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'Indonesia',
            title: 'INDONESIA',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Data Per Provinsi',
                    type: 'item',
                    url: '/indonesia_data',
                    icon: 'feather icon-file-text'
                },
                
            ]
        }
    ]
}