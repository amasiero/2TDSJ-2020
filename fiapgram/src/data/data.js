const data = {
    fotos : [
        {
            user : 'andreymasiero',
            profilePic : 'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/s960x960/31381349_10209385307268336_8898200479486443520_o.jpg?_nc_cat=109&_nc_ohc=aSIZ28U95MEAX-593ZO&_nc_ht=scontent.fcgh3-1.fna&oh=6e340a1b9f9aa9aeac6b94256b1d3880&oe=5EC2A4F0',
            picId : 1,
            picSrc : 'https://i.imgur.com/l49aYS3.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [
                { 
                    user : 'minhoca_sh3', 
                    comment : 'Tooooppp!!!'
                }, {
                    user : 'stevejobs',
                    comment : 'Wow!'
                }
            ],
            picLegend : 'Beauty of Antarctica'
        },
        {
            user : 'douglascabral',
            profilePic : 'https://media-exp1.licdn.com/dms/image/C5103AQGS7L2OjCtWqg/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=kd4QlIyqK9CUoc77re9Xr7qbx1MMFDDCaIIiKpSNJ88',
            picId : 2,
            picSrc : 'https://i.imgur.com/a0bs8oJ.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'There is a pool of blue water'
        },
        {
            user : 'gustavocalixto',
            profilePic : 'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/p960x960/67497318_2440059446088929_6828257415134183424_o.jpg?_nc_cat=103&_nc_ohc=Qflsf53hncYAX8AoEo2&_nc_ht=scontent.fcgh3-1.fna&_nc_tp=6&oh=98209f8657e0f54fd4e817a5aa039f50&oe=5ECE7A6F',
            picId : 3,
            picSrc : 'https://i.imgur.com/bTIbBnY.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'The black desert like Oblivion movie'
        },
        {
            user : 'andreymasiero',
            profilePic : 'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/s960x960/31381349_10209385307268336_8898200479486443520_o.jpg?_nc_cat=109&_nc_ohc=aSIZ28U95MEAX-593ZO&_nc_ht=scontent.fcgh3-1.fna&oh=6e340a1b9f9aa9aeac6b94256b1d3880&oe=5EC2A4F0',
            picId : 4,
            picSrc : 'https://i.imgur.com/5tj6S7O.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'Iced caves under Glaciers'
        },
        {
            user : 'gustavocalixto',
            profilePic : 'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/p960x960/67497318_2440059446088929_6828257415134183424_o.jpg?_nc_cat=103&_nc_ohc=Qflsf53hncYAX8AoEo2&_nc_ht=scontent.fcgh3-1.fna&_nc_tp=6&oh=98209f8657e0f54fd4e817a5aa039f50&oe=5ECE7A6F',
            picId : 5,
            picSrc : 'https://i.imgur.com/PpD4G4N.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'Glaciers moving at a very slow place'
        },
        {
            user : 'douglascabral',
            profilePic : 'https://media-exp1.licdn.com/dms/image/C5103AQGS7L2OjCtWqg/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=kd4QlIyqK9CUoc77re9Xr7qbx1MMFDDCaIIiKpSNJ88',
            picId : 6,
            picSrc : 'https://i.imgur.com/a7fJPfn.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'Some nights the sky lights up with Auroras'
        },
        {
            user : 'gustavocalixto',
            profilePic : 'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/p960x960/67497318_2440059446088929_6828257415134183424_o.jpg?_nc_cat=103&_nc_ohc=Qflsf53hncYAX8AoEo2&_nc_ht=scontent.fcgh3-1.fna&_nc_tp=6&oh=98209f8657e0f54fd4e817a5aa039f50&oe=5ECE7A6F',
            picId : 7,
            picSrc : 'https://i.imgur.com/Ep65hfv.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'Iceland the mosted film location on sci fi films'
        },
        {
            user : 'douglascabral',
            profilePic : 'https://media-exp1.licdn.com/dms/image/C5103AQGS7L2OjCtWqg/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=kd4QlIyqK9CUoc77re9Xr7qbx1MMFDDCaIIiKpSNJ88',
            picId : 8,
            picSrc : 'https://i.imgur.com/rBkbXS3.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'Every color of the rainbow gets captured in this amazing sunset shot'
        },
        {
            user : 'andreymasiero',
            profilePic : 'https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/s960x960/31381349_10209385307268336_8898200479486443520_o.jpg?_nc_cat=109&_nc_ohc=aSIZ28U95MEAX-593ZO&_nc_ht=scontent.fcgh3-1.fna&oh=6e340a1b9f9aa9aeac6b94256b1d3880&oe=5EC2A4F0',
            picId : 9,
            picSrc : 'https://i.imgur.com/9ncYySC.jpg',
            picLiked : false,
            picLikes : [],
            picComments : [],
            picLegend : 'Hiking around Hadrian´s Wall'
        }
    ]
};

export default data;