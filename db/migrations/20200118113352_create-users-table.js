
exports.up = function (knex) {
    return knex.schema.createTable('usersTemp', tbl => {
        tbl.increments();
        tbl.text('username', 128)
            .unique()
            .notNullable();

        tbl.text('bio')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usersTemp')
};
