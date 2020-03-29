/* eslint-disable func-names */
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('shoes')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('shoes').insert([
                {
                    id: 1,
                    photoUrl:
                        'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
                    style: 'sports',
                    season: 'summer',
                    userId: 1,
                    boxId: 1,
                },
                {
                    id: 2,
                    photoUrl:
                        'https://images.unsplash.com/photo-1556048219-bb6978360b84',
                    style: 'casual',
                    season: 'spring',
                    userId: 1,
                    boxId: 2,
                },
                {
                    id: 3,
                    photoUrl:
                        'https://images.unsplash.com/photo-1459712105412-be146fae746d',
                    style: 'formal',
                    season: 'autumn',
                    userId: 2,
                    boxId: 1,
                },
            ]);
        });
};
