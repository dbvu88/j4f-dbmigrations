
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usersTemp').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('usersTemp').insert([
        { username: 'Tom', bio: "Looking for Jerry" },
        { username: 'Jane' },
        { username: 'Pete' }
      ]);
    });
};
