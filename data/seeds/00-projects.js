
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {project_id: 1, project_name: 'project 1', project_description: 'this is a massive description'},
        {project_id: 2, project_name: 'project 2', project_description: 'this is another massive description'},
      ]);
    });
};
