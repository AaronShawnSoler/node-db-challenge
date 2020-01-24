
exports.up = function(knex) {
    return knex.schema
        .createTable('Projects', tbl => {
            tbl.increments('project_id');
            tbl.string('project_name')
                .notNullable()
                .unique();
            tbl.text('project_description');
            tbl.boolean('project_completed')
                .defaultTo(false);
        })
        .createTable('Tasks', tbl => {
            tbl.increments('task_id');
            tbl.text('task_description')
                .notNullable()
                .unique();
            tbl.text('task_notes');
            tbl.boolean('task_completed')
                .defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('Projects');
        })
        .createTable('Resources', tbl => {
            tbl.increments('resource_id');
            tbl.string('resource_name')
                .notNullable()
                .unique();
            tbl.text('resource_description');
        })
        .createTable('Project_Resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('Projects');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('Resources');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('Project_Resources')
        .dropTableIfExists('Resources')
        .dropTableIfExists('Tasks')
        .dropTableIfExists('Projects');
};
